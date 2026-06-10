const express   = require('express');
const router    = express.Router();
const Anthropic = require('@anthropic-ai/sdk');
const { verifyToken } = require('../middleware/auth');

router.use(verifyToken);

// GET /api/ai/company-lookup?name=...
router.get('/company-lookup', async (req, res) => {
  const name = (req.query.name || '').trim();
  if (!name) return res.status(400).json({ success: false, message: 'שם חסר' });

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return res.status(503).json({ success: false, message: 'מפתח AI לא מוגדר' });

  try {
    const client = new Anthropic({ apiKey });

    const msg = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 1024,
      tools: [{ type: 'web_search_20250305', name: 'web_search' }],
      messages: [{
        role: 'user',
        content: [
          {
            type: 'text',
            text: `Search the web and find business registration details for the Israeli company: "${name}".
Return ONLY a JSON object (no markdown, no extra text) with these fields:
{
  "businessNumber": "ח.פ. or עוסק מורשה number, or null",
  "phone": "main phone number, or null",
  "address": "street address, or null",
  "city": "city name in Hebrew, or null",
  "website": "website URL, or null",
  "contactName": "main contact person name, or null"
}
If a field cannot be found, use null. Return only the JSON object.`
          }
        ]
      }]
    });

    // Extract text from the final message
    let jsonText = '';
    for (const block of msg.content) {
      if (block.type === 'text') {
        jsonText += block.text;
      }
    }

    // Parse JSON from response (strip markdown fences if present)
    const cleaned = jsonText.replace(/```(?:json)?\n?/g, '').replace(/```/g, '').trim();
    let data;
    try {
      data = JSON.parse(cleaned);
    } catch {
      // Try to extract JSON object from text
      const match = cleaned.match(/\{[\s\S]*\}/);
      data = match ? JSON.parse(match[0]) : null;
    }

    if (!data) return res.status(500).json({ success: false, message: 'לא הצלחתי לנתח את התגובה' });

    res.json({ success: true, data });
  } catch (err) {
    console.error('[AI company-lookup]', err.message);
    res.status(500).json({ success: false, message: 'שגיאה בחיפוש AI: ' + err.message });
  }
});

module.exports = router;
