import React, { useState, useEffect, useCallback } from 'react'
import { GeneratedContent } from '../GeneratedContent'
import { generateContent } from '../../api/generateContent'
import styles from './styles.module.css'

interface Section {
  url: string
  content?: {
    link?: string
    subheading?: string
    body?: string
  };
  showFullText?: boolean
}

interface SectionCardProps {
  section: Section;
  onSectionChange: (field: string, value: string) => void
  onContentChange: (content: any) => void
  onToggleFullText: () => void
}

export const SectionCard: React.FC<SectionCardProps> = React.memo(({ section, onSectionChange, onContentChange, onToggleFullText }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [hasAIContent, setHasAIContent] = useState(false)

  const updateLinkInContent = useCallback((newUrl: string) => {
    if (section.content?.link !== newUrl) {
      onContentChange({
        ...section.content,
        link: newUrl
      });
    }
  }, [section.content, onContentChange])

  useEffect(() => {
    if (section.url && (!section.content || section.content.link !== section.url)) {
      updateLinkInContent(section.url)
    }
  }, [section.url])

  const handleGenerateContent = async () => {
    setIsLoading(true)
    setHasAIContent(false)
    try {
      const newContent = await generateContent('default', section.url)
      onContentChange({
        ...newContent,
        link: section.url
      })
      setHasAIContent(true);
    } catch (error) {
      console.error('Error generating content:', error)
      onContentChange({
        subheading: 'Error generating content',
        body: (error as Error).message,
        link: section.url
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
      
      </div>
      <div className={styles.cardContent}>
        <div className={styles.urlInput}>
          <input
            type="text"
            placeholder="Enter URL"
            value={section.url}
            onChange={(e) => onSectionChange('url', e.target.value)}
          />
          <button onClick={handleGenerateContent} disabled={isLoading || !section.url} className={styles.generateButton}>
            {isLoading ? 'Generating...' : 'Generate'}
          </button>
        </div>
        { hasAIContent && section.content && (
          <GeneratedContent
            content={{ ...section.content, subheading: section.content?.subheading || '', body: section.content?.body || '' }}
            showFullText={section.showFullText ?? false}
            onContentChange={onContentChange}
            onToggleFullText={onToggleFullText}
          />
        )}
      </div>
    </div>
  )
})