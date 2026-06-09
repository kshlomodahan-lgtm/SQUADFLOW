const express = require('express');
const router  = express.Router();
const { sql, getPool } = require('../db');
const { verifyToken } = require('../middleware/auth');

router.use(verifyToken);

// GET /api/reference/countries?lang=he
router.get('/countries', async (req, res) => {
  const lang = req.query.lang || 'he';
  try {
    const pool = await getPool();
    const result = await pool.request()
      .input('LangCode', sql.VarChar(5), lang)
      .query(`
        SELECT c.CountryCode, c.CountryCode3, c.NumericCode,
               c.PhonePrefix, c.CurrencyCode, c.DefaultLangCode, c.FlagEmoji,
               ISNULL(t.CountryShortName, c.CountryShortEN) AS ShortName,
               ISNULL(t.CountryName,      c.CountryNameEN)  AS FullName
        FROM tblCountries c
        LEFT JOIN tblCountryTranslations t
          ON t.CountryCode = c.CountryCode AND t.LanguageCode = @LangCode
        WHERE c.IsActive = 1
        ORDER BY c.SortOrder, ISNULL(t.CountryShortName, c.CountryShortEN)
      `);
    res.json({ success: true, data: result.recordset });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

// GET /api/reference/languages
router.get('/languages', async (req, res) => {
  try {
    const pool = await getPool();
    const result = await pool.request().query(`
      SELECT LanguageCode, LanguageName, NativeName, Direction
      FROM tblLanguages WHERE IsActive = 1 ORDER BY SortOrder
    `);
    res.json({ success: true, data: result.recordset });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

// GET /api/reference/currencies
router.get('/currencies', async (req, res) => {
  try {
    const pool = await getPool();
    const result = await pool.request().query(`
      SELECT CurrencyCode, CurrencyName, CurrencySymbol, DecimalDigits
      FROM tblCurrencies WHERE IsActive = 1 ORDER BY CurrencyCode
    `);
    res.json({ success: true, data: result.recordset });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

// GET /api/reference/exchange-rate?from=USD&to=ILS
router.get('/exchange-rate', async (req, res) => {
  const { from = 'USD', to = 'ILS' } = req.query;
  try {
    const pool = await getPool();
    const result = await pool.request()
      .input('From', sql.Char(3), from)
      .input('To',   sql.Char(3), to)
      .query(`
        SELECT TOP 1 ExchangeRate, RateDate, Source
        FROM tblExchangeRates
        WHERE BaseCurrency = @From AND TargetCurrency = @To
        ORDER BY RateDate DESC
      `);
    res.json({ success: true, data: result.recordset[0] || null });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

module.exports = router;
