import React, { useState, useCallback } from 'react'
import { SectionCard } from '../SectionCard'
import styles from './styles.module.css'


export const NewsletterGenerator: React.FC = () => {
  const [sections, setSections] = useState<{ id: number; url: string; content: { link?: string; subheading?: string; body?: string } | undefined; showFullText: boolean }[]>([
    { id: 1, url: '', content: undefined, showFullText: false }
  ])

  const handleSectionChange = useCallback((id: number, field: string, value: any) => {
    setSections(prevSections =>
      prevSections.map(section =>
        section.id === id ? { ...section, [field]: value } : section
      )
    )
  }, [])

  const handleContentChange = useCallback((id: number, newContent: any) => {
    setSections(prevSections =>
      prevSections.map(section =>
        section.id === id ? { ...section, content: newContent } : section
      )
    )
  }, [])
  

  const handleToggleFullText = useCallback((id: number) => {
    setSections(prevSections =>
      prevSections.map(section =>
        section.id === id ? { ...section, showFullText: !section.showFullText } : section
      )
    )
  }, [])

  const addSection = () => {
    setSections(prevSections => [
      ...prevSections,
      {
        id: Date.now(),
        url: '',
        content: undefined,
        showFullText: false
      }
    ])
  }

  return (
    <div className={styles.newsletterGenerator}>
      {sections.map(section => (
        <SectionCard
          key={section.id}
          section={section}
          onSectionChange={(field: string, value: any) => handleSectionChange(section.id, field, value)}
          onContentChange={(newContent: string | null) => handleContentChange(section.id, newContent)}
          onToggleFullText={() => handleToggleFullText(section.id)}
        />
      ))}
      <button onClick={addSection} className={styles.addSectionButton}>Add Section</button>
    </div>
  )
}