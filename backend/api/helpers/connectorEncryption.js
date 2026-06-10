const crypto = require('crypto');

// Derive a 32-byte key from JWT_SECRET (no extra env var needed)
const ENC_KEY = crypto.scryptSync(
  process.env.JWT_SECRET || 'squadflow-default-secret',
  'squadflow-connector-salt',
  32
);

function encrypt(plaintext) {
  if (!plaintext) return null;
  const iv  = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv('aes-256-gcm', ENC_KEY, iv);
  const enc = Buffer.concat([cipher.update(plaintext, 'utf8'), cipher.final()]);
  const tag = cipher.getAuthTag();
  return Buffer.concat([iv, tag, enc]).toString('base64');
}

function decrypt(ciphertext) {
  if (!ciphertext) return null;
  const buf  = Buffer.from(ciphertext, 'base64');
  const iv   = buf.slice(0, 12);
  const tag  = buf.slice(12, 28);
  const enc  = buf.slice(28);
  const decipher = crypto.createDecipheriv('aes-256-gcm', ENC_KEY, iv);
  decipher.setAuthTag(tag);
  return decipher.update(enc) + decipher.final('utf8');
}

// Encrypt sensitive fields in a config object
function encryptConfig(configObj) {
  return encrypt(JSON.stringify(configObj));
}

// Decrypt + return config object
function decryptConfig(ciphertext) {
  if (!ciphertext) return {};
  try {
    return JSON.parse(decrypt(ciphertext));
  } catch {
    return {};
  }
}

// Mask a secret value for display (show last 4 chars only)
function maskSecret(val) {
  if (!val) return '';
  if (val.length <= 8) return '****';
  return '****' + val.slice(-4);
}

module.exports = { encrypt, decrypt, encryptConfig, decryptConfig, maskSecret };
