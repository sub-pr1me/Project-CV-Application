import React from 'react'
import styles from '../styles/SectionButton.module.css'

const SectionButton = ({switchSection, id, src, text}) => {
  return (
    <div className={styles.btn_container} onClick={() => switchSection(id)}>
      <div className={styles.img_container}>
        <img src={src} alt={text} />
      </div>
      <div className={styles.text}>{text}</div>
    </div>
  )
}

export default SectionButton
