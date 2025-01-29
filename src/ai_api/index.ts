import * as dotenv from "dotenv";
import OpenAI from "openai";
dotenv.config();

export async function initializeDeepseek() {
  const openai = new OpenAI({
    baseURL: "https://api.deepseek.com",
    apiKey: process.env.DEEPSEEK_API_KEY,
  });
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "deepseek-chat",
  });

  console.log(completion.choices[0].message.content);
}

export async function initializeOpenAi() {
  const apiKey = process.env.OPEN_API_KEY;
  const openai = new OpenAI({
    apiKey,
  });

  const completion = openai.chat.completions.create({
    model: "gpt-4o-mini",
    store: true,
    messages: [{ role: "user", content: "write a haiku about ai" }],
  });

  completion.then((result) => console.log(result.choices[0].message));
}
