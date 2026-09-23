import 'dotenv/config';

const res = await fetch("https://api.groq.com/openai/v1/models", {
  headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` },
});
const data = await res.json();
console.log(data);