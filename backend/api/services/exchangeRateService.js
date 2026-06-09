'use strict';

const https  = require('https');
const { sql, getPool } = require('../db');

const BOI_URL = 'https://boi.org.il/PublicApi/GetExchangeRates?asXML=true';

// ── XML fetch ────────────────────────────────────────────────
function fetchXml(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, { timeout: 15000 }, res => {
      let data = '';
      res.setEncoding('utf8');
      res.on('data', chunk => { data += chunk; });
      res.on('end',  ()    => resolve(data));
    });
    req.on('error',   reject);
    req.on('timeout', () => { req.destroy(); reject(new Error('BOI request timeout')); });
  });
}

// ── Simple XML parser (structure is known and stable) ────────
function parseRates(xml) {
  const rates = [];
  const dtoRe  = /<ExchangeRateResponseDTO>([\s\S]*?)<\/ExchangeRateResponseDTO>/g;
  let dtoMatch;
  while ((dtoMatch = dtoRe.exec(xml)) !== null) {
    const block   = dtoMatch[1];
    const field   = name => { const m = new RegExp(`<${name}>([^<]*)<\/${name}>`).exec(block); return m ? m[1].trim() : ''; };
    const key     = field('Key').toUpperCase();
    const rate    = parseFloat(field('CurrentExchangeRate'));
    const unit    = parseFloat(field('Unit')) || 1;
    const change  = parseFloat(field('CurrentChange')) || 0;
    const updated = field('LastUpdate');
    if (key && !isNaN(rate) && rate > 0) {
      rates.push({ key, ilsPerUnit: rate / unit, changePercent: change, lastUpdate: updated });
    }
  }
  return rates;
}

// ── Main refresh function ─────────────────────────────────────
async function refreshRates() {
  console.log('[BOI] Fetching exchange rates from Bank of Israel...');
  const startedAt = new Date();

  const xml = await fetchXml(BOI_URL);
  if (!xml.includes('<ExchangeRateResponseDTO>')) {
    throw new Error('BOI response does not contain expected XML structure');
  }

  const rates = parseRates(xml);
  if (!rates.length) throw new Error('No rates parsed from BOI response');

  const db = await getPool();

  // Load valid currency codes to avoid FK violations
  const codesRes = await db.request().query('SELECT CurrencyCode FROM dbo.tblCurrencies WHERE IsActive = 1');
  const validSet  = new Set(codesRes.recordset.map(r => r.CurrencyCode));
  if (!validSet.has('ILS')) {
    throw new Error('ILS not found in tblCurrencies — cannot store rates');
  }

  let saved = 0, skipped = 0;

  for (const r of rates) {
    if (!validSet.has(r.key)) { skipped++; continue; }

    // RateDate from BOI LastUpdate (ISO 8601 → date only)
    const rateDate = r.lastUpdate
      ? r.lastUpdate.substring(0, 10)
      : startedAt.toISOString().substring(0, 10);

    try {
      await db.request()
        .input('BaseCurrency',  sql.Char(3),       r.key)
        .input('TargetCurrency',sql.Char(3),       'ILS')
        .input('ExchangeRate',  sql.Decimal(18, 6), r.ilsPerUnit)
        .input('RateDate',      sql.Date,           rateDate)
        .input('Source',        sql.NVarChar(30),  'BOI')
        .query(`
          MERGE dbo.tblExchangeRates AS T
          USING (SELECT @BaseCurrency  AS BC,
                        @TargetCurrency AS TC,
                        @RateDate       AS RD) AS S
          ON  T.BaseCurrency  = S.BC
          AND T.TargetCurrency = S.TC
          AND T.RateDate       = S.RD
          WHEN MATCHED THEN
            UPDATE SET ExchangeRate = @ExchangeRate,
                       Source       = @Source
          WHEN NOT MATCHED THEN
            INSERT (BaseCurrency, TargetCurrency, ExchangeRate, RateDate, Source)
            VALUES (@BaseCurrency, @TargetCurrency, @ExchangeRate, @RateDate, @Source);
        `);
      saved++;
    } catch (e) {
      console.warn(`[BOI] Skip ${r.key}: ${e.message}`);
      skipped++;
    }
  }

  const result = { saved, skipped, total: rates.length, updatedAt: startedAt };
  console.log(`[BOI] Done — saved: ${saved}, skipped: ${skipped}, total: ${rates.length}`);
  return result;
}

// ── Check if today was already fetched ───────────────────────
async function isUpToDate() {
  try {
    const db     = await getPool();
    const today  = new Date().toISOString().substring(0, 10);
    const result = await db.request()
      .input('Today', sql.Date, today)
      .query(`SELECT COUNT(*) AS cnt
              FROM dbo.tblExchangeRates
              WHERE Source = 'BOI' AND RateDate = @Today`);
    return result.recordset[0].cnt > 0;
  } catch { return false; }
}

module.exports = { refreshRates, isUpToDate };
