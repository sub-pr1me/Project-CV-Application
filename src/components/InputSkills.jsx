import React from 'react'
import styles from '../styles/InputSkills.module.css'

const InputSkills = ({id, defaultValue, onChange, isDisabled}) => {
  return (
    <div className={styles.input_wrapper}>
        <label htmlFor={id}>{`# ${id}:`}</label>
        <input
            type='text' 
            id={id}
            autoComplete='false'
            // required
            disabled={isDisabled}
            defaultValue={defaultValue}
            onChange={onChange}
        />
    </div>
  )
}

export default InputSkills