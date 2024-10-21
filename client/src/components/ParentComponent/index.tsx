import React from 'react'
import styles from './styles.module.css'
import { NewsletterGenerator } from '../NewsLetterGeneration'
import { Heading } from '../Heading'

export const ParentComponent: React.FC = () => {
  return (
    <div className={styles.wholePageContainer}>
      <div className={styles.contentBox}>
        <Heading />
        <NewsletterGenerator />
      </div>
    </div>
  )
}