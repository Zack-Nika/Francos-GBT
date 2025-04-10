require("dotenv").config();

// This logs the version from node_modules/openai/package.json
console.log("OpenAI library version:", require("openai/package.json").version);

const { Configuration, OpenAIApi } = require("openai");

// Attempt to create a config + call an API endpoint
const configuration = new Configuration({ apiKey: process.env.OPENAI_KEY });
const openai = new OpenAIApi(configuration);

(async () => {
  try {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: "Just a test!" }],
    });
    console.log("API call success! Response from GPT:", response.data.choices[0].message.content);
  } catch (error) {
    console.error("OpenAI API call failed:", error);
  }
})();
