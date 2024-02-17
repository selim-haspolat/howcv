import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // This is the default and can be omitted
});

const sendMessageToChatGpt = async (message) => {
  const systemMessage = {
    role: "system",
    content: "Explain like i am 10 years old",
  };
  try {
    const { data } = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [...systemMessage, { role: "user", content: msg }],
      max_tokens: 500,
    });


    return data.choices[0].message.content
  } catch (error) {
    console.log(error);
  }
};

export default sendMessageToChatGpt;
