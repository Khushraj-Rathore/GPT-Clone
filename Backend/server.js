import OpenAI from 'openai';
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import chatRoutes from './routes/chat.js'; 

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

app.use('/api', chatRoutes);
// const client = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
//   baseURL: 'https://api.groq.com/openai/v1',
// });

// const response = await client.chat.completions.create({
//   model: 'openai/gpt-oss-20b',
//   messages: [
//     { role: 'user', content: 'Are semicolons optional in JavaScript?' },
//   ],
// });

// console.log(response.choices[0].message.content);


// app.post("/test", async (req, res) => {
//   const options = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
//     },
//     body: JSON.stringify({
//       model: "openai/gpt-oss-20b",
//       messages: [
//         {
//           role: "user",
//           content: req.body.message,
//         },
//       ],
//     }),
//   };

//   try {
//     const response = await fetch(
//       "https://api.groq.com/openai/v1/chat/completions",
//       options
//     );
//     const data = await response.json();
//     console.log(data.choices[0].message.content);
//     res.json(data);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: err.message });
//   }
// });

app.listen(PORT,()=>{
  console.log('server running on PORT 5000');
  connectDB();
});

const connectDB= async()=>{
  try{
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connect with Database");
  }catch(err){
    console.log(err);
  }
}