const { OpenAI } = require("openai");

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const generateResponse = async (req, res) => {
  try {
    const { prompt } = req.body;

    const response = await openai.chat.completions.create({
      model: "gpt-4o",  // ✅ Change model to "gpt-4o"
      messages: [{ role: "user", content: prompt }],
    });

    res.json({ response: response.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { generateResponse };
