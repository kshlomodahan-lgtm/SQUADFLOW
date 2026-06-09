'use strict';

const express   = require('express');
const router    = express.Router();
const { sql, getPool }       = require('../db');
const requireAuth            = require('../middleware/auth');
const { refreshRates }       = require('../services/exchangeRateService');

// ── GET /api/exchange-rates/latest ───────────────────────────
// שערי המטבע האחרונים שהתקבלו מבנק ישראל (TargetCurrency = ILS)
router.get('/latest', requireAuth, async (req, res) => {
  try {
    const db = await getPool();
    const result = await db.request().query(`
      SELECT
        r.BaseCurrency                         AS CurrencyCode,
        c.CurrencyName,
        c.Symbol,
        r.ExchangeRate                         AS ILSPerUnit,
        CAST(1.0 / r.ExchangeRate AS DECIMAL(18,6)) AS UnitsPerILS,
        r.RateDate,
        r.Source,
        prev.ExchangeRate                      AS PrevRate,
        CASE WHEN prev.ExchangeRate IS NOT NULL AND prev.ExchangeRate <> 0
             THEN CAST(((r.ExchangeRate - prev.ExchangeRate) / prev.ExchangeRate * 100)
                       AS DECIMAL(10,4))
             ELSE NULL END                     AS ChangePercent
      FROM dbo.tblExchangeRates r
      JOIN dbo.tblCurrencies    c    ON c.CurrencyCode = r.BaseCurrency
      -- שער של אתמול לחישוב שינוי %
      LEFT JOIN dbo.tblExchangeRates prev
             ON prev.BaseCurrency  = r.BaseCurrency
            AND prev.TargetCurrency = r.TargetCurrency
            AND prev.RateDate = (
                SELECT MAX(RD2.RateDate)
                FROM dbo.tblExchangeRates RD2
                WHERE RD2.BaseCurrency   = r.BaseCurrency
                  AND RD2.TargetCurrency = r.TargetCurrency
                  AND RD2.RateDate < r.RateDate
            )
      WHERE r.TargetCurrency = 'ILS'
        AND r.Source = 'BOI'
        AND r.RateDate = (
            SELECT MAX(RateDate)
            FROM dbo.tblExchangeRates
            WHERE TargetCurrency = 'ILS' AND Source = 'BOI'
        )
      ORDER BY r.BaseCurrency
    `);

    return res.json({
      success:   true,
      rateDate:  result.recordset[0]?.RateDate ?? null,
      data:      result.recordset,
    });
  } catch (err) {
    console.error('GET /exchange-rates/latest:', err.message);
    return res.status(500).json({ success: false, message: 'שגיאת שרת' });
  }
});

// ── GET /api/exchange-rates/history/:code ────────────────────
// היסטוריה של מטבע מסוים (30 יום אחרונים)
router.get('/history/:code', requireAuth, async (req, res) => {
  const code = (req.params.code || '').toUpperCase().trim();
  if (!code || code.length !== 3) return res.status(400).json({ success: false, message: 'קוד מטבע לא תקין' });

  try {
    const db = await getPool();
    const result = await db.request()
      .input('Code', sql.Char(3), code)
      .query(`
        SELECT RateDate, ExchangeRate AS ILSPerUnit, Source
        FROM dbo.tblExchangeRates
        WHERE BaseCurrency  = @Code
          AND TargetCurrency = 'ILS'
          AND Source = 'BOI'
          AND RateDate >= DATEADD(DAY, -30, GETDATE())
        ORDER BY RateDate ASC
      `);

    return res.json({ success: true, currency: code, data: result.recordset });
  } catch (err) {
    console.error('GET /exchange-rates/history:', err.message);
    return res.status(500).json({ success: false, message: 'שגיאת שרת' });
  }
});

// ── POST /api/exchange-rates/refresh ────────────────────────
// ריענון ידני — Super Admin בלבד
router.post('/refresh', requireAuth, async (req, res) => {
  try {
    const result = await refreshRates();
    return res.json({ success: true, message: 'שערי המטבע עודכנו בהצלחה', ...result });
  } catch (err) {
    console.error('POST /exchange-rates/refresh:', err.message);
    return res.status(500).json({ success: false, message: `שגיאה בריענון: ${err.message}` });
  }
});

module.exports = router;
