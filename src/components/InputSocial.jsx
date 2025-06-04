import React from 'react'
import styles from '../styles/InputSocial.module.css'

const InputSocial = ({id, alt, src, defaultValue, onChange, isDisabled}) => {
  return (
    <div className={styles.input_wrapper}>
        <label htmlFor={id}><img src={src} alt={alt} /></label>
        <input
            type='text' 
            id={id}
            autoComplete='false'
            // required
            defaultValue={defaultValue}
            onChange={onChange}
            disabled={isDisabled}
        />
    </div>
  )
}

export default InputSocial