-- ============================================================
-- SQUADFLOW — Reference Tables
-- Languages, Currencies, Countries, Exchange Rates
-- + OrgType / DefaultLanguage / DefaultCurrency on tblTenants/tblUsers
-- Created: 2026-06-09
-- ============================================================
USE [ProfitsCRM];
GO

-- ────────────────────────────────────────────────────────────
-- 1. LANGUAGES (tblLanguages)
-- ────────────────────────────────────────────────────────────
IF OBJECT_ID('dbo.tblLanguages') IS NULL
  CREATE TABLE dbo.tblLanguages (
    LanguageCode  VARCHAR(5)    NOT NULL CONSTRAINT PK_Languages PRIMARY KEY,
    LanguageName  NVARCHAR(60)  NOT NULL,   -- English name
    NativeName    NVARCHAR(60)  NOT NULL,   -- Name in its own language
    Direction     CHAR(3)       NOT NULL DEFAULT 'LTR'
                  CONSTRAINT CK_LangDir CHECK (Direction IN ('LTR','RTL')),
    IsActive      BIT           NOT NULL DEFAULT 1,
    SortOrder     INT           NOT NULL DEFAULT 0
  );

MERGE dbo.tblLanguages AS T
USING (VALUES
  ('he', N'Hebrew',     N'עברית',      'RTL', 1,  1),
  ('en', N'English',    N'English',    'LTR', 1,  2),
  ('ar', N'Arabic',     N'العربية',    'RTL', 1,  3),
  ('fr', N'French',     N'Français',   'LTR', 1,  4),
  ('es', N'Spanish',    N'Español',    'LTR', 1,  5),
  ('de', N'German',     N'Deutsch',    'LTR', 1,  6),
  ('ru', N'Russian',    N'Русский',    'LTR', 1,  7),
  ('zh', N'Chinese',    N'中文',       'LTR', 1,  8),
  ('pt', N'Portuguese', N'Português',  'LTR', 1,  9),
  ('it', N'Italian',    N'Italiano',   'LTR', 1, 10),
  ('nl', N'Dutch',      N'Nederlands', 'LTR', 1, 11),
  ('tr', N'Turkish',    N'Türkçe',     'LTR', 1, 12),
  ('ja', N'Japanese',   N'日本語',     'LTR', 1, 13),
  ('ko', N'Korean',     N'한국어',     'LTR', 1, 14),
  ('pl', N'Polish',     N'Polski',     'LTR', 1, 15),
  ('sv', N'Swedish',   N'Svenska',    'LTR', 1, 16),
  ('no', N'Norwegian', N'Norsk',      'LTR', 1, 17),
  ('da', N'Danish',    N'Dansk',      'LTR', 1, 18),
  ('fi', N'Finnish',   N'Suomi',      'LTR', 1, 19),
  ('cs', N'Czech',     N'Čeština',    'LTR', 1, 20),
  ('el', N'Greek',     N'Ελληνικά',   'LTR', 1, 21),
  ('ro', N'Romanian',  N'Română',     'LTR', 1, 22),
  ('hu', N'Hungarian', N'Magyar',     'LTR', 1, 23),
  ('uk', N'Ukrainian', N'Українська', 'LTR', 1, 24),
  ('hi', N'Hindi',     N'हिन्दी',     'LTR', 1, 25),
  ('th', N'Thai',      N'ภาษาไทย',    'LTR', 1, 26),
  ('ms', N'Malay',     N'Bahasa Melayu', 'LTR', 1, 27),
  ('id', N'Indonesian',N'Bahasa Indonesia', 'LTR', 1, 28)
) AS S(LanguageCode, LanguageName, NativeName, Direction, IsActive, SortOrder)
ON T.LanguageCode = S.LanguageCode
WHEN NOT MATCHED THEN
  INSERT (LanguageCode, LanguageName, NativeName, Direction, IsActive, SortOrder)
  VALUES (S.LanguageCode, S.LanguageName, S.NativeName, S.Direction, S.IsActive, S.SortOrder)
WHEN MATCHED THEN UPDATE SET
  LanguageName = S.LanguageName,
  NativeName   = S.NativeName,
  Direction    = S.Direction;
GO

-- ────────────────────────────────────────────────────────────
-- 2. CURRENCIES (tblCurrencies)
-- ────────────────────────────────────────────────────────────
IF OBJECT_ID('dbo.tblCurrencies') IS NULL
  CREATE TABLE dbo.tblCurrencies (
    CurrencyCode   CHAR(3)       NOT NULL CONSTRAINT PK_Currencies PRIMARY KEY,
    CurrencyName   NVARCHAR(60)  NOT NULL,
    CurrencySymbol NVARCHAR(10)  NOT NULL,
    DecimalDigits  TINYINT       NOT NULL DEFAULT 2,
    IsActive       BIT           NOT NULL DEFAULT 1
  );

MERGE dbo.tblCurrencies AS T
USING (VALUES
  ('ILS', N'Israeli New Shekel',       N'₪',  2, 1),
  ('USD', N'US Dollar',                N'$',  2, 1),
  ('EUR', N'Euro',                     N'€',  2, 1),
  ('GBP', N'British Pound',            N'£',  2, 1),
  ('AED', N'UAE Dirham',               N'د.إ',2, 1),
  ('SAR', N'Saudi Riyal',              N'ر.س',2, 1),
  ('JOD', N'Jordanian Dinar',          N'د.أ',3, 1),
  ('EGP', N'Egyptian Pound',           N'ج.م',2, 1),
  ('KWD', N'Kuwaiti Dinar',            N'د.ك',3, 1),
  ('QAR', N'Qatari Riyal',             N'ر.ق',2, 1),
  ('BHD', N'Bahraini Dinar',           N'BD', 3, 1),
  ('OMR', N'Omani Rial',               N'ر.ع',3, 1),
  ('JPY', N'Japanese Yen',             N'¥',  0, 1),
  ('CNY', N'Chinese Yuan',             N'¥',  2, 1),
  ('CHF', N'Swiss Franc',              N'CHF',2, 1),
  ('CAD', N'Canadian Dollar',          N'CA$',2, 1),
  ('AUD', N'Australian Dollar',        N'A$', 2, 1),
  ('INR', N'Indian Rupee',             N'₹',  2, 1),
  ('TRY', N'Turkish Lira',             N'₺',  2, 1),
  ('RUB', N'Russian Ruble',            N'₽',  2, 1),
  ('BRL', N'Brazilian Real',           N'R$', 2, 1),
  ('MXN', N'Mexican Peso',             N'$',  2, 1),
  ('ZAR', N'South African Rand',       N'R',  2, 1),
  ('SGD', N'Singapore Dollar',         N'S$', 2, 1),
  ('KRW', N'South Korean Won',         N'₩',  0, 1),
  ('PLN', N'Polish Zloty',             N'zł', 2, 1),
  ('SEK', N'Swedish Krona',            N'kr', 2, 1),
  ('NOK', N'Norwegian Krone',          N'kr', 2, 1),
  ('DKK', N'Danish Krone',             N'kr', 2, 1),
  ('NZD', N'New Zealand Dollar',       N'NZ$',2, 1),
  ('IQD', N'Iraqi Dinar',              N'ع.د', 3, 1),
  ('SYP', N'Syrian Pound',             N'£',  2, 1),
  ('CZK', N'Czech Koruna',             N'Kč', 2, 1),
  ('RON', N'Romanian Leu',             N'lei',2, 1),
  ('HUF', N'Hungarian Forint',         N'Ft', 2, 1),
  ('UAH', N'Ukrainian Hryvnia',        N'₴',  2, 1),
  ('ARS', N'Argentine Peso',           N'$',  2, 1),
  ('COP', N'Colombian Peso',           N'$',  2, 1),
  ('THB', N'Thai Baht',               N'฿',  2, 1),
  ('MYR', N'Malaysian Ringgit',        N'RM', 2, 1),
  ('IDR', N'Indonesian Rupiah',        N'Rp', 2, 1),
  ('HRK', N'Croatian Kuna',            N'kn', 2, 1),
  ('HKD', N'Hong Kong Dollar',         N'HK$',2, 1),
  ('TWD', N'New Taiwan Dollar',        N'NT$',2, 1)
) AS S(CurrencyCode, CurrencyName, CurrencySymbol, DecimalDigits, IsActive)
ON T.CurrencyCode = S.CurrencyCode
WHEN NOT MATCHED THEN
  INSERT (CurrencyCode, CurrencyName, CurrencySymbol, DecimalDigits, IsActive)
  VALUES (S.CurrencyCode, S.CurrencyName, S.CurrencySymbol, S.DecimalDigits, S.IsActive)
WHEN MATCHED THEN UPDATE SET
  CurrencyName   = S.CurrencyName,
  CurrencySymbol = S.CurrencySymbol;
GO

-- ────────────────────────────────────────────────────────────
-- 3. COUNTRIES (tblCountries)
-- ────────────────────────────────────────────────────────────
IF OBJECT_ID('dbo.tblCountries') IS NULL
  CREATE TABLE dbo.tblCountries (
    CountryID        INT IDENTITY     NOT NULL CONSTRAINT PK_Countries PRIMARY KEY,
    CountryCode      CHAR(2)          NOT NULL CONSTRAINT UQ_CountryCode2  UNIQUE,  -- ISO 3166-1 alpha-2
    CountryCode3     CHAR(3)          NOT NULL CONSTRAINT UQ_CountryCode3  UNIQUE,  -- ISO 3166-1 alpha-3
    NumericCode      CHAR(3)          NOT NULL CONSTRAINT UQ_CountryNum    UNIQUE,  -- ISO 3166-1 numeric
    CountryNameEN    NVARCHAR(100)    NOT NULL,   -- Full English name
    CountryShortEN   NVARCHAR(60)     NOT NULL,   -- Short English name
    PhonePrefix      VARCHAR(10)      NOT NULL,   -- +972, +1
    CurrencyCode     CHAR(3)          NULL CONSTRAINT FK_Country_Currency REFERENCES dbo.tblCurrencies(CurrencyCode),
    DefaultLangCode  VARCHAR(5)       NULL CONSTRAINT FK_Country_Language REFERENCES dbo.tblLanguages(LanguageCode),
    FlagEmoji        NVARCHAR(10)     NULL,
    IsActive         BIT              NOT NULL DEFAULT 1,
    SortOrder        INT              NOT NULL DEFAULT 0
  );

-- Seed countries via MERGE on CountryCode
MERGE dbo.tblCountries AS T
USING (VALUES
-- ── Middle East ──────────────────────────────────────────
  ('IL','ISR','376', N'State of Israel',                    N'Israel',       '+972', 'ILS','he', N'🇮🇱', 1,  1),
  ('AE','ARE','784', N'United Arab Emirates',               N'UAE',          '+971', 'AED','ar', N'🇦🇪', 1,  2),
  ('SA','SAU','682', N'Kingdom of Saudi Arabia',            N'Saudi Arabia', '+966', 'SAR','ar', N'🇸🇦', 1,  3),
  ('JO','JOR','400', N'Hashemite Kingdom of Jordan',        N'Jordan',       '+962', 'JOD','ar', N'🇯🇴', 1,  4),
  ('EG','EGY','818', N'Arab Republic of Egypt',             N'Egypt',        '+20',  'EGP','ar', N'🇪🇬', 1,  5),
  ('LB','LBN','422', N'Lebanese Republic',                  N'Lebanon',      '+961', 'USD','ar', N'🇱🇧', 1,  6),
  ('KW','KWT','414', N'State of Kuwait',                    N'Kuwait',       '+965', 'KWD','ar', N'🇰🇼', 1,  7),
  ('QA','QAT','634', N'State of Qatar',                     N'Qatar',        '+974', 'QAR','ar', N'🇶🇦', 1,  8),
  ('BH','BHR','048', N'Kingdom of Bahrain',                 N'Bahrain',      '+973', 'BHD','ar', N'🇧🇭', 1,  9),
  ('OM','OMN','512', N'Sultanate of Oman',                  N'Oman',         '+968', 'OMR','ar', N'🇴🇲', 1, 10),
  ('IQ','IRQ','368', N'Republic of Iraq',                   N'Iraq',         '+964', 'IQD','ar', N'🇮🇶', 1, 11),
  ('SY','SYR','760', N'Syrian Arab Republic',               N'Syria',        '+963', 'SYP','ar', N'🇸🇾', 1, 12),
-- ── Europe ───────────────────────────────────────────────
  ('US','USA','840', N'United States of America',           N'USA',          '+1',   'USD','en', N'🇺🇸', 1, 20),
  ('GB','GBR','826', N'United Kingdom of Great Britain',    N'UK',           '+44',  'GBP','en', N'🇬🇧', 1, 21),
  ('DE','DEU','276', N'Federal Republic of Germany',        N'Germany',      '+49',  'EUR','de', N'🇩🇪', 1, 22),
  ('FR','FRA','250', N'French Republic',                    N'France',       '+33',  'EUR','fr', N'🇫🇷', 1, 23),
  ('IT','ITA','380', N'Italian Republic',                   N'Italy',        '+39',  'EUR','it', N'🇮🇹', 1, 24),
  ('ES','ESP','724', N'Kingdom of Spain',                   N'Spain',        '+34',  'EUR','es', N'🇪🇸', 1, 25),
  ('NL','NLD','528', N'Kingdom of the Netherlands',         N'Netherlands',  '+31',  'EUR','nl', N'🇳🇱', 1, 26),
  ('BE','BEL','056', N'Kingdom of Belgium',                 N'Belgium',      '+32',  'EUR','fr', N'🇧🇪', 1, 27),
  ('SE','SWE','752', N'Kingdom of Sweden',                  N'Sweden',       '+46',  'SEK','sv', N'🇸🇪', 1, 28),
  ('NO','NOR','578', N'Kingdom of Norway',                  N'Norway',       '+47',  'NOK','no', N'🇳🇴', 1, 29),
  ('DK','DNK','208', N'Kingdom of Denmark',                 N'Denmark',      '+45',  'DKK','da', N'🇩🇰', 1, 30),
  ('FI','FIN','246', N'Republic of Finland',                N'Finland',      '+358', 'EUR','fi', N'🇫🇮', 1, 31),
  ('PL','POL','616', N'Republic of Poland',                 N'Poland',       '+48',  'PLN','pl', N'🇵🇱', 1, 32),
  ('CZ','CZE','203', N'Czech Republic',                     N'Czechia',      '+420', 'CZK','cs', N'🇨🇿', 1, 33),
  ('AT','AUT','040', N'Republic of Austria',                N'Austria',      '+43',  'EUR','de', N'🇦🇹', 1, 34),
  ('CH','CHE','756', N'Swiss Confederation',                N'Switzerland',  '+41',  'CHF','de', N'🇨🇭', 1, 35),
  ('PT','PRT','620', N'Portuguese Republic',                N'Portugal',     '+351', 'EUR','pt', N'🇵🇹', 1, 36),
  ('IE','IRL','372', N'Republic of Ireland',                N'Ireland',      '+353', 'EUR','en', N'🇮🇪', 1, 37),
  ('GR','GRC','300', N'Hellenic Republic',                  N'Greece',       '+30',  'EUR','el', N'🇬🇷', 1, 38),
  ('RO','ROU','642', N'Romania',                            N'Romania',      '+40',  'RON','ro', N'🇷🇴', 1, 39),
  ('HU','HUN','348', N'Hungary',                            N'Hungary',      '+36',  'HUF','hu', N'🇭🇺', 1, 40),
  ('UA','UKR','804', N'Ukraine',                            N'Ukraine',      '+380', 'UAH','uk', N'🇺🇦', 1, 41),
  ('RU','RUS','643', N'Russian Federation',                 N'Russia',       '+7',   'RUB','ru', N'🇷🇺', 1, 42),
  ('TR','TUR','792', N'Republic of Turkey',                 N'Turkey',       '+90',  'TRY','tr', N'🇹🇷', 1, 43),
-- ── Americas ─────────────────────────────────────────────
  ('CA','CAN','124', N'Canada',                             N'Canada',       '+1',   'CAD','en', N'🇨🇦', 1, 50),
  ('BR','BRA','076', N'Federative Republic of Brazil',      N'Brazil',       '+55',  'BRL','pt', N'🇧🇷', 1, 51),
  ('MX','MEX','484', N'United Mexican States',              N'Mexico',       '+52',  'MXN','es', N'🇲🇽', 1, 52),
  ('AR','ARG','032', N'Argentine Republic',                 N'Argentina',    '+54',  'ARS','es', N'🇦🇷', 1, 53),
  ('CO','COL','170', N'Republic of Colombia',               N'Colombia',     '+57',  'COP','es', N'🇨🇴', 1, 54),
-- ── Asia ─────────────────────────────────────────────────
  ('JP','JPN','392', N'Japan',                              N'Japan',        '+81',  'JPY','ja', N'🇯🇵', 1, 60),
  ('CN','CHN','156', N'People''s Republic of China',        N'China',        '+86',  'CNY','zh', N'🇨🇳', 1, 61),
  ('IN','IND','356', N'Republic of India',                  N'India',        '+91',  'INR','hi', N'🇮🇳', 1, 62),
  ('KR','KOR','410', N'Republic of Korea',                  N'South Korea',  '+82',  'KRW','ko', N'🇰🇷', 1, 63),
  ('SG','SGP','702', N'Republic of Singapore',              N'Singapore',    '+65',  'SGD','en', N'🇸🇬', 1, 64),
  ('TH','THA','764', N'Kingdom of Thailand',                N'Thailand',     '+66',  'THB','th', N'🇹🇭', 1, 65),
  ('MY','MYS','458', N'Malaysia',                           N'Malaysia',     '+60',  'MYR','ms', N'🇲🇾', 1, 66),
  ('ID','IDN','360', N'Republic of Indonesia',              N'Indonesia',    '+62',  'IDR','id', N'🇮🇩', 1, 67),
-- ── Oceania ──────────────────────────────────────────────
  ('AU','AUS','036', N'Commonwealth of Australia',          N'Australia',    '+61',  'AUD','en', N'🇦🇺', 1, 70),
  ('NZ','NZL','554', N'New Zealand',                        N'New Zealand',  '+64',  'NZD','en', N'🇳🇿', 1, 71),
-- ── Africa ───────────────────────────────────────────────
  ('ZA','ZAF','710', N'Republic of South Africa',           N'South Africa', '+27',  'ZAR','en', N'🇿🇦', 1, 80)
) AS S(CountryCode, CountryCode3, NumericCode, CountryNameEN, CountryShortEN,
       PhonePrefix, CurrencyCode, DefaultLangCode, FlagEmoji, IsActive, SortOrder)
ON T.CountryCode = S.CountryCode
WHEN NOT MATCHED THEN
  INSERT (CountryCode, CountryCode3, NumericCode, CountryNameEN, CountryShortEN,
          PhonePrefix, CurrencyCode, DefaultLangCode, FlagEmoji, IsActive, SortOrder)
  VALUES (S.CountryCode, S.CountryCode3, S.NumericCode, S.CountryNameEN, S.CountryShortEN,
          S.PhonePrefix, S.CurrencyCode, S.DefaultLangCode, S.FlagEmoji, S.IsActive, S.SortOrder)
WHEN MATCHED THEN UPDATE SET
  CountryNameEN   = S.CountryNameEN,
  CountryShortEN  = S.CountryShortEN,
  PhonePrefix     = S.PhonePrefix,
  CurrencyCode    = S.CurrencyCode,
  DefaultLangCode = S.DefaultLangCode;
GO

-- ────────────────────────────────────────────────────────────
-- 4. COUNTRY TRANSLATIONS (tblCountryTranslations)
-- ────────────────────────────────────────────────────────────
IF OBJECT_ID('dbo.tblCountryTranslations') IS NULL
  CREATE TABLE dbo.tblCountryTranslations (
    TransID          INT IDENTITY  NOT NULL CONSTRAINT PK_CountryTrans PRIMARY KEY,
    CountryCode      CHAR(2)       NOT NULL CONSTRAINT FK_Trans_Country  REFERENCES dbo.tblCountries(CountryCode),
    LanguageCode     VARCHAR(5)    NOT NULL CONSTRAINT FK_Trans_Language REFERENCES dbo.tblLanguages(LanguageCode),
    CountryName      NVARCHAR(100) NOT NULL,   -- Full name in target language
    CountryShortName NVARCHAR(60)  NOT NULL,   -- Short name in target language
    CONSTRAINT UQ_CountryLangTrans UNIQUE (CountryCode, LanguageCode)
  );

-- ── Hebrew translations ───────────────────────────────────
MERGE dbo.tblCountryTranslations AS T
USING (VALUES
-- Middle East
  ('IL','he', N'מדינת ישראל',                N'ישראל'),
  ('AE','he', N'איחוד האמירויות הערביות',    N'איחוד האמירויות'),
  ('SA','he', N'ממלכת ערב הסעודית',          N'ערב הסעודית'),
  ('JO','he', N'הממלכה ההאשמית של ירדן',     N'ירדן'),
  ('EG','he', N'הרפובליקה הערבית של מצרים',  N'מצרים'),
  ('LB','he', N'הרפובליקה הלבנונית',         N'לבנון'),
  ('KW','he', N'מדינת כווית',                N'כווית'),
  ('QA','he', N'מדינת קטר',                  N'קטר'),
  ('BH','he', N'ממלכת בחריין',               N'בחריין'),
  ('OM','he', N'סולטנות עומאן',              N'עומאן'),
  ('IQ','he', N'הרפובליקה העיראקית',         N'עיראק'),
  ('SY','he', N'הרפובליקה הערבית הסורית',    N'סוריה'),
-- Europe / Americas
  ('US','he', N'ארצות הברית של אמריקה',      N'ארצות הברית'),
  ('GB','he', N'הממלכה המאוחדת',             N'בריטניה'),
  ('DE','he', N'הרפובליקה הפדרלית של גרמניה',N'גרמניה'),
  ('FR','he', N'הרפובליקה הצרפתית',          N'צרפת'),
  ('IT','he', N'הרפובליקה האיטלקית',         N'איטליה'),
  ('ES','he', N'ממלכת ספרד',                 N'ספרד'),
  ('NL','he', N'ממלכת הולנד',                N'הולנד'),
  ('BE','he', N'ממלכת בלגיה',                N'בלגיה'),
  ('SE','he', N'ממלכת שוודיה',               N'שוודיה'),
  ('NO','he', N'ממלכת נורווגיה',             N'נורווגיה'),
  ('DK','he', N'ממלכת דנמרק',                N'דנמרק'),
  ('FI','he', N'הרפובליקה הפינית',           N'פינלנד'),
  ('PL','he', N'הרפובליקה של פולין',         N'פולין'),
  ('CZ','he', N'הרפובליקה הצ''כית',          N'צ''כיה'),
  ('AT','he', N'הרפובליקה של אוסטריה',       N'אוסטריה'),
  ('CH','he', N'הקונפדרציה השוויצרית',       N'שוויץ'),
  ('PT','he', N'הרפובליקה הפורטוגלית',       N'פורטוגל'),
  ('IE','he', N'הרפובליקה של אירלנד',        N'אירלנד'),
  ('GR','he', N'הרפובליקה ההלנית',           N'יוון'),
  ('RO','he', N'רומניה',                     N'רומניה'),
  ('HU','he', N'הונגריה',                    N'הונגריה'),
  ('UA','he', N'אוקראינה',                   N'אוקראינה'),
  ('RU','he', N'הפדרציה הרוסית',             N'רוסיה'),
  ('TR','he', N'הרפובליקה הטורקית',          N'טורקיה'),
  ('CA','he', N'קנדה',                       N'קנדה'),
  ('BR','he', N'הרפובליקה הפדרטיבית של ברזיל',N'ברזיל'),
  ('MX','he', N'המדינות המאוחדות של מקסיקו', N'מקסיקו'),
  ('AR','he', N'הרפובליקה הארגנטינאית',      N'ארגנטינה'),
  ('CO','he', N'הרפובליקה של קולומביה',      N'קולומביה'),
  ('JP','he', N'יפן',                        N'יפן'),
  ('CN','he', N'הרפובליקה העממית של סין',    N'סין'),
  ('IN','he', N'הרפובליקה של הודו',          N'הודו'),
  ('KR','he', N'הרפובליקה של קוריאה',        N'קוריאה הדרומית'),
  ('SG','he', N'הרפובליקה של סינגפור',       N'סינגפור'),
  ('TH','he', N'ממלכת תאילנד',               N'תאילנד'),
  ('MY','he', N'מלזיה',                      N'מלזיה'),
  ('ID','he', N'הרפובליקה של אינדונזיה',     N'אינדונזיה'),
  ('AU','he', N'חבר העמים של אוסטרליה',      N'אוסטרליה'),
  ('NZ','he', N'ניו זילנד',                  N'ניו זילנד'),
  ('ZA','he', N'הרפובליקה של דרום אפריקה',   N'דרום אפריקה')
) AS S(CountryCode, LanguageCode, CountryName, CountryShortName)
ON T.CountryCode = S.CountryCode AND T.LanguageCode = S.LanguageCode
WHEN NOT MATCHED THEN
  INSERT (CountryCode, LanguageCode, CountryName, CountryShortName)
  VALUES (S.CountryCode, S.LanguageCode, S.CountryName, S.CountryShortName)
WHEN MATCHED THEN UPDATE SET
  CountryName = S.CountryName, CountryShortName = S.CountryShortName;
GO

-- ── Arabic translations ───────────────────────────────────
MERGE dbo.tblCountryTranslations AS T
USING (VALUES
  ('IL','ar', N'دولة إسرائيل',                   N'إسرائيل'),
  ('AE','ar', N'الإمارات العربية المتحدة',         N'الإمارات'),
  ('SA','ar', N'المملكة العربية السعودية',          N'السعودية'),
  ('JO','ar', N'المملكة الأردنية الهاشمية',         N'الأردن'),
  ('EG','ar', N'جمهورية مصر العربية',              N'مصر'),
  ('LB','ar', N'الجمهورية اللبنانية',              N'لبنان'),
  ('KW','ar', N'دولة الكويت',                     N'الكويت'),
  ('QA','ar', N'دولة قطر',                        N'قطر'),
  ('BH','ar', N'مملكة البحرين',                   N'البحرين'),
  ('OM','ar', N'سلطنة عُمان',                     N'عُمان'),
  ('IQ','ar', N'جمهورية العراق',                  N'العراق'),
  ('SY','ar', N'الجمهورية العربية السورية',         N'سوريا'),
  ('US','ar', N'الولايات المتحدة الأمريكية',        N'أمريكا'),
  ('GB','ar', N'المملكة المتحدة',                  N'بريطانيا'),
  ('DE','ar', N'جمهورية ألمانيا الاتحادية',         N'ألمانيا'),
  ('FR','ar', N'الجمهورية الفرنسية',               N'فرنسا'),
  ('IT','ar', N'الجمهورية الإيطالية',              N'إيطاليا'),
  ('ES','ar', N'مملكة إسبانيا',                   N'إسبانيا'),
  ('TR','ar', N'جمهورية تركيا',                   N'تركيا'),
  ('RU','ar', N'الاتحاد الروسي',                  N'روسيا'),
  ('CA','ar', N'كندا',                            N'كندا'),
  ('JP','ar', N'اليابان',                         N'اليابان'),
  ('CN','ar', N'جمهورية الصين الشعبية',            N'الصين'),
  ('IN','ar', N'جمهورية الهند',                   N'الهند'),
  ('AU','ar', N'أستراليا',                        N'أستراليا')
) AS S(CountryCode, LanguageCode, CountryName, CountryShortName)
ON T.CountryCode = S.CountryCode AND T.LanguageCode = S.LanguageCode
WHEN NOT MATCHED THEN
  INSERT (CountryCode, LanguageCode, CountryName, CountryShortName)
  VALUES (S.CountryCode, S.LanguageCode, S.CountryName, S.CountryShortName)
WHEN MATCHED THEN UPDATE SET
  CountryName = S.CountryName, CountryShortName = S.CountryShortName;
GO

-- ────────────────────────────────────────────────────────────
-- 5. EXCHANGE RATES (tblExchangeRates)
-- ────────────────────────────────────────────────────────────
IF OBJECT_ID('dbo.tblExchangeRates') IS NULL
  CREATE TABLE dbo.tblExchangeRates (
    RateID           INT IDENTITY    NOT NULL CONSTRAINT PK_ExchangeRates PRIMARY KEY,
    BaseCurrency     CHAR(3)         NOT NULL CONSTRAINT FK_Rate_Base   REFERENCES dbo.tblCurrencies(CurrencyCode),
    TargetCurrency   CHAR(3)         NOT NULL CONSTRAINT FK_Rate_Target REFERENCES dbo.tblCurrencies(CurrencyCode),
    ExchangeRate     DECIMAL(18,6)   NOT NULL,
    RateDate         DATE            NOT NULL DEFAULT CAST(GETDATE() AS DATE),
    Source           NVARCHAR(30)    NOT NULL DEFAULT 'MANUAL',  -- MANUAL | BOI | ECB | API
    CreatedAt        DATETIME        NOT NULL DEFAULT GETDATE(),
    CONSTRAINT CK_Rate_DiffCurrency CHECK (BaseCurrency <> TargetCurrency),
    CONSTRAINT UQ_Rate_DatePair UNIQUE (BaseCurrency, TargetCurrency, RateDate)
  );

-- Initial ILS rates (approximate, 2026-06 — update via API integration)
MERGE dbo.tblExchangeRates AS T
USING (VALUES
  ('ILS','USD', 0.272000, '2026-06-09', 'MANUAL'),
  ('ILS','EUR', 0.251000, '2026-06-09', 'MANUAL'),
  ('ILS','GBP', 0.214000, '2026-06-09', 'MANUAL'),
  ('ILS','AED', 0.999000, '2026-06-09', 'MANUAL'),
  ('ILS','SAR', 1.020000, '2026-06-09', 'MANUAL'),
  ('ILS','JOD', 0.193000, '2026-06-09', 'MANUAL'),
  ('USD','ILS', 3.676000, '2026-06-09', 'MANUAL'),
  ('EUR','ILS', 3.980000, '2026-06-09', 'MANUAL'),
  ('USD','EUR', 0.922000, '2026-06-09', 'MANUAL'),
  ('EUR','USD', 1.084000, '2026-06-09', 'MANUAL')
) AS S(BaseCurrency, TargetCurrency, ExchangeRate, RateDate, Source)
ON T.BaseCurrency = S.BaseCurrency
   AND T.TargetCurrency = S.TargetCurrency
   AND T.RateDate = CAST(S.RateDate AS DATE)
WHEN NOT MATCHED THEN
  INSERT (BaseCurrency, TargetCurrency, ExchangeRate, RateDate, Source)
  VALUES (S.BaseCurrency, S.TargetCurrency, S.ExchangeRate, CAST(S.RateDate AS DATE), S.Source);
GO

-- ────────────────────────────────────────────────────────────
-- 6. ALTER tblTenants — OrgType + Language + Currency + Country
-- ────────────────────────────────────────────────────────────
IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id=OBJECT_ID('dbo.tblTenants') AND name='OrgType')
  ALTER TABLE dbo.tblTenants
    ADD OrgType NVARCHAR(20) NOT NULL DEFAULT 'CLIENT'
        CONSTRAINT CK_Tenant_OrgType CHECK (OrgType IN ('PLATFORM','SOFTWARE_HOUSE','IMPLEMENTER','CLIENT'));

IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id=OBJECT_ID('dbo.tblTenants') AND name='DefaultLanguageCode')
  ALTER TABLE dbo.tblTenants ADD DefaultLanguageCode VARCHAR(5) NULL
    CONSTRAINT FK_Tenant_Language REFERENCES dbo.tblLanguages(LanguageCode);

IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id=OBJECT_ID('dbo.tblTenants') AND name='DefaultCurrencyCode')
  ALTER TABLE dbo.tblTenants ADD DefaultCurrencyCode CHAR(3) NULL
    CONSTRAINT FK_Tenant_Currency REFERENCES dbo.tblCurrencies(CurrencyCode);

IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id=OBJECT_ID('dbo.tblTenants') AND name='CountryCode')
  ALTER TABLE dbo.tblTenants ADD CountryCode CHAR(2) NULL
    CONSTRAINT FK_Tenant_Country REFERENCES dbo.tblCountries(CountryCode);

-- Set platform defaults (TenantID=1 = PLATFORM)
UPDATE dbo.tblTenants
SET OrgType              = 'PLATFORM',
    DefaultLanguageCode  = 'he',
    DefaultCurrencyCode  = 'ILS',
    CountryCode          = 'IL'
WHERE TenantID = 1;

-- Set all others to SOFTWARE_HOUSE (update manually per org as needed)
UPDATE dbo.tblTenants
SET OrgType = 'SOFTWARE_HOUSE'
WHERE TenantID <> 1 AND OrgType = 'CLIENT';
GO

-- ────────────────────────────────────────────────────────────
-- 7. ALTER tblUsers — LanguageCode + CurrencyCode
-- ────────────────────────────────────────────────────────────
IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id=OBJECT_ID('dbo.tblUsers') AND name='LanguageCode')
  ALTER TABLE dbo.tblUsers ADD LanguageCode VARCHAR(5) NULL
    CONSTRAINT FK_User_Language REFERENCES dbo.tblLanguages(LanguageCode);

IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id=OBJECT_ID('dbo.tblUsers') AND name='CurrencyCode')
  ALTER TABLE dbo.tblUsers ADD CurrencyCode CHAR(3) NULL
    CONSTRAINT FK_User_Currency REFERENCES dbo.tblCurrencies(CurrencyCode);
GO

-- ────────────────────────────────────────────────────────────
-- 8. tblOrgRelationships — inter-organization relationships
-- ────────────────────────────────────────────────────────────
IF OBJECT_ID('dbo.tblOrgRelationships') IS NULL
  CREATE TABLE dbo.tblOrgRelationships (
    RelID       INT IDENTITY  NOT NULL CONSTRAINT PK_OrgRel PRIMARY KEY,
    ParentOrgID INT           NOT NULL CONSTRAINT FK_OrgRel_Parent REFERENCES dbo.tblTenants(TenantID),
    ChildOrgID  INT           NOT NULL CONSTRAINT FK_OrgRel_Child  REFERENCES dbo.tblTenants(TenantID),
    RelType     NVARCHAR(20)  NOT NULL
                CONSTRAINT CK_OrgRelType CHECK (RelType IN ('SERVES','RESELLS','IMPLEMENTS')),
    StartDate   DATE          NOT NULL DEFAULT CAST(GETDATE() AS DATE),
    EndDate     DATE          NULL,
    IsActive    BIT           NOT NULL DEFAULT 1,
    CreatedAt   DATETIME      NOT NULL DEFAULT GETDATE(),
    CONSTRAINT CK_OrgRel_NoSelf UNIQUE (ParentOrgID, ChildOrgID, RelType)
  );
GO

PRINT 'reference_tables.sql completed successfully.';
