
export default async function handler(req, res) {
  const apiKey = process.env.OPENAI_API_KEY;
  const { message } = req.body;

  if (!apiKey) {
    return res.status(500).json({ error: "Missing OpenAI API key." });
  }

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }],
      max_tokens: 150
    })
  });

  if (!response.ok) {
    const err = await response.json();
    return res.status(500).json({ error: err });
  }

  const data = await response.json();
  const reply = data.choices?.[0]?.message?.content || "No reply.";
  res.status(200).json({ reply });
}
