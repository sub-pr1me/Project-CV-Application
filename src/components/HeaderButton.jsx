import React from 'react'
import styles from '../styles/HeaderButton.module.css'

export default function HeaderButton({image, text}) {
  return (
    <div className={styles.btn_container}>
        <div className={styles.img_container}>
            <img src={image} alt={`${text}`} />
        </div>
        <div className={styles.text}>{text}</div>
    </div>   
  )
}