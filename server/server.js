import express from 'express';
import cors from 'cors';
import { OpenAIClient } from '@azure/openai';
import { AzureKeyCredential } from '@azure/core-auth';
import dotenv from 'dotenv';
import axios from 'axios';
import * as cheerio from 'cheerio';
import systemPrompt from './systemPrompt.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use(cors({
  origin: 'http://localhost:5173', 
  methods: ['GET', 'POST', 'OPTIONS'], 
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

const endpoint = process.env.AZURE_OPENAI_ENDPOINT;
const azureApiKey = process.env.AZURE_OPENAI_API_KEY;
const deploymentId = "GPT4o";

const validateRequestBody = (req, res, next) => {
  const { messages } = req.body;
  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'Invalid request body. "messages" array is required.' });
  }
  next();
};

const createChatCompletion = async (messages) => {
  const client = new OpenAIClient(endpoint, new AzureKeyCredential(azureApiKey));
  const messagesWithSystemPrompt = [
    { role: 'system', content: systemPrompt },
    ...messages
  ];
  const result = await client.getChatCompletions(deploymentId, messagesWithSystemPrompt);

  return result.choices[0].message.content;
};

app.get('/', (req, res) => {
  res.json({ message: 'Backend is connected' });
});

async function fetchWebPageContent(url) {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    $('script, style').remove();

    const text = $('body').text();

    return text.replace(/\s+/g, ' ').trim();
  } catch (error) {
    console.error('Error fetching web page content:', error);
    throw new Error('Error fetching web page content');
  }
}

app.post('/', validateRequestBody, async (req, res) => {
  const { messages } = req.body;
  
  try {
    const userMessage = messages.find(message => message.role === 'user')?.content;
    const urlMatch = userMessage.match(/URL:\s*(https?:\/\/\S+)/i);

    if (!urlMatch) {
      return res.status(400).json({ error: 'Invalid request. URL is required in the user message.' });
    }

    const url = urlMatch[1];

    const webpageContent = await fetchWebPageContent(url);

    const newMessages = [
      ...messages,
      {role: 'user', content: `Summarise the following webpage content in British English:\n\n${webpageContent}` }
    ];

    const aiResponse = await createChatCompletion(newMessages);

    res.json({ 
      response: aiResponse,
      systemPromptUsed: true,
   });
  } catch (error) {
    console.error('Error in chat completion:', error);
    res.status(500).json({ error: 'An error occurred', details: error.message });
  }
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});