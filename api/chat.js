export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message } = req.body;
  const reply = `CryptoBot here! You asked: "${message}"`;

  res.status(200).json({ reply });
}
