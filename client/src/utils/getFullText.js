export const getFullText = (content) => {
  if (!content) return '';
  return `${content.heading || ''}\n${content.subheading || ''}\n\n${content.body || ''}\n\n${content.link || ''}`;
};