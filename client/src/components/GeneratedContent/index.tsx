import React from 'react';
import styles from './styles.module.css';

interface Content {
  subheading: string;
  body: string;
  link?: string;
}

interface GeneratedContentProps {
  content: Content;
  showFullText: boolean;
  onContentChange: (content: Content) => void;
  onToggleFullText: () => void;
}

export const GeneratedContent: React.FC<GeneratedContentProps> = ({ content, showFullText, onContentChange, onToggleFullText }) => {
  const handleContentChange = (field: keyof Content, value: string) => {
    onContentChange({
      ...content,
      [field]: value
    });
  };

  const renderLinkButton = () => {
    if (content.link) {
      return (
        <div className={styles.linkButton}>
          Link: {' '}
          <a
            href={content.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Article
          </a>
        </div>
      );
    }
    return null;
  };

  if (showFullText) {
    return (
      <div className={styles.generatedContent}>
        <textarea
          className={styles.fullTextArea}
          value={`${content.subheading}\n\n${content.body}`}
          onChange={(e) => {
            const lines = e.target.value.split('\n');
            onContentChange({
              subheading: lines[1] || '',
              body: lines.slice(2).join('\n').trim(),
              link: content.link
            });
          }}
          rows={10}
        />
        {/* <input
          type="text"
          placeholder="Link"
          value={content.link || ''}
          onChange={(e) => handleContentChange('link', e.target.value)}
          className={styles.linkInput}
        /> */}
        {renderLinkButton()}
        <button onClick={onToggleFullText} className={styles.toggleButton}>Show Separate Fields</button>
      </div>
    );
  }

  return (
    <div className={styles.generatedContent}>
      <input
        type="text"
        placeholder="Subheading"
        value={content.subheading || ''}
        onChange={(e) => handleContentChange('subheading', e.target.value)}
        className={styles.subheadingInput}
      />
      <textarea
        placeholder="Body"
        value={content.body || ''}
        onChange={(e) => handleContentChange('body', e.target.value)}
        rows={6}
        className={styles.bodyTextArea}
      />
      {/* <input
        type="text"
        placeholder="Link"
        value={content.link || ''}
        onChange={(e) => handleContentChange('link', e.target.value)}
        className={styles.linkInput}
      /> */}
      {renderLinkButton()}
      <button onClick={onToggleFullText} className={styles.toggleButton}>Show Full Text</button>
    </div>
  );
};