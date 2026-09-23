import 'dotenv/config';

const getOpenAIAPIResponse = async(message)=>{
    const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "openai/gpt-oss-20b",
      messages: [
        {
          role: "user",
          content:message,
        },
      ],
    }),
  };

  try {
    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      options
    );
    const data = await response.json();
    console.log(JSON.stringify(data, null, 2));
    return (data.choices[0].message.content);
    // res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
}

export default getOpenAIAPIResponse;