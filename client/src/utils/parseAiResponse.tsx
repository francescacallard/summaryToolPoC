export const parseAIResponse = (response: string) => {
  if (typeof response !== 'string') {
    console.error('Invalid response type:', response)
    return {
      subheading: 'Invalid response from AI',
      body: 'The AI response is not a string',
      link: ''
    }
  }

  const parts = response.split('\n')
  console.log('The whole API response', parts)

  const subheadingMatch = parts.find(part => part.startsWith('[Subheading]'))?.match(/\[Subheading\]\s*(.*)/)
  const linkMatch = parts.find(part => part.startsWith('[Link:'))?.match(/\[Link:\s*(.*)\]\((.*)\)/)

  const bodyStart = parts.findIndex(part => part.startsWith('[Subheading]')) + 1
  const bodyEnd = parts.findIndex(part => part.startsWith('[Link:'))
  const body = parts.slice(bodyStart, bodyEnd !== -1 ? bodyEnd : undefined).join('\n').trim()

  return {
    subheading: subheadingMatch ? subheadingMatch[1] : 'No subheading provided',
    body: body || 'No body provided',
    link: linkMatch ? linkMatch[2] : 'No link provided'
  }
}
