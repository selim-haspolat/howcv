import { NextResponse } from "next/server";

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // This is the default and can be omitted
});

export const POST = async (req) => {
  const body = await req.json();

  const { message } = body;

  const systemMessage = {
    role: "system",
    content: "Explain like i am 10 years old",
  };
  try {
    const data = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [systemMessage, { role: "user", content: message }],
      max_tokens: 500,
    });

    return NextResponse.json({ message: data.choices[0].message.content });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};
