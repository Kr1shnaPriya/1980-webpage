// 1980's — A Nostalgic Restaurant
// Minimal backend: serves the frontend + a contact endpoint.
// No booking system, by design.

const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'frontend')));

// Contact form submissions get appended to a local log file.
// Swap this out for a real email/CRM integration later if you want.
const LOG_FILE = path.join(__dirname, 'contact-messages.json');

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: 'name, email, and message are required.' });
  }

  const entry = { name, email, message, receivedAt: new Date().toISOString() };

  let existing = [];
  if (fs.existsSync(LOG_FILE)) {
    try { existing = JSON.parse(fs.readFileSync(LOG_FILE, 'utf-8')); } catch (_) { existing = []; }
  }
  existing.push(entry);
  fs.writeFileSync(LOG_FILE, JSON.stringify(existing, null, 2));

  res.json({ ok: true, message: 'Thanks — we\'ll get back to you soon.' });
});

app.get('/api/health', (_req, res) => res.json({ ok: true }));

app.listen(PORT, () => {
  console.log(`1980's site running at http://localhost:${PORT}`);
});
