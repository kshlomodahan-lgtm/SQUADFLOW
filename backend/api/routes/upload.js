const express = require('express');
const router  = express.Router();
const multer  = require('multer');
const path    = require('path');
const fs      = require('fs');
const requireAuth = require('../middleware/auth');

const LOGOS_DIR = path.join(__dirname, '../../frontend/assets/logos');
if (!fs.existsSync(LOGOS_DIR)) fs.mkdirSync(LOGOS_DIR, { recursive: true });

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, LOGOS_DIR),
  filename:    (_req, file, cb) => {
    const ext  = path.extname(file.originalname).toLowerCase();
    const name = `logo_${Date.now()}${ext}`;
    cb(null, name);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 2 * 1024 * 1024 },   // 2MB
  fileFilter: (_req, file, cb) => {
    const allowed = ['.png', '.jpg', '.jpeg', '.svg', '.webp'];
    const ext = path.extname(file.originalname).toLowerCase();
    cb(null, allowed.includes(ext));
  },
});

// ── POST /api/upload/logo ─────────────────────────────────
router.post('/logo', requireAuth, upload.single('logo'), (req, res) => {
  if (!req.file)
    return res.status(400).json({ success: false, message: 'קובץ לא תקין או חסר' });

  const logoUrl = `assets/logos/${req.file.filename}`;
  return res.json({ success: true, logoUrl });
});

module.exports = router;
