import { parseAIResponse } from '../utils/parseAiResponse'

interface GenerateContentRequest {
  messages: { role: string; content: string }[]
}

interface GenerateContentResponse {
  response: string
}

interface ParsedAIResponse {
  subheading: string
  body: string
  link: string
}


export const generateContent = async (section: string, url: string): Promise<ParsedAIResponse> => {
  try {
    const requestBody: GenerateContentRequest = {
      messages: [
        { role: "user", content: `Generate a newsletter section for ${section} based on this URL: ${url}` }
      ]
    }
    console.log('Request body:', requestBody)

    const response = await fetch('http://localhost:5000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
      credentials: 'include',
    })

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`HTTP error! status: ${response.status}, message: ${errorData.error || 'Unknown error'}`)
    }

    const data: GenerateContentResponse = await response.json()
    console.log('API Response:', data)
    console.log('The whole API response', data)

    if (!data.response) {
      throw new Error('No AI response found in the API response')
    }
    
    return parseAIResponse(data.response)
  } catch (error) {
    console.error('Error generating content:', error)
    throw new Error(`Error: ${(error as Error).message}`)
  }
}
