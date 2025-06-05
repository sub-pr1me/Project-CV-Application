import React from 'react'
import styles from '../styles/InputGeneral.module.css'

const InputGeneral = ({id, defaultValue, type, onChange, title, isDisabled}) => {
  return (
    <div className={styles.input_wrapper}>
        <label htmlFor={id}>{title}</label>
        <input
            type={type} 
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

export default InputGeneral