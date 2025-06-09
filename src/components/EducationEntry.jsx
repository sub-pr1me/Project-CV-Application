import React from 'react'
import styles from '../styles/EducationEntry.module.css'

const EducationEntry = ({formData, setFormData, removeEntry, index, isDisabled}) => {
  return (
    <div className={styles.input_wrapper}>
        <div className={styles.entry_title}>
            <div className={styles.entry_number}>{`# ${index}`}</div>
            <button
                type='button'
                className={`${styles.remove_btn} ${formData.education.length === 1 ? styles.hidden : null}`}
                onClick={() => {removeEntry(index)}}
                disabled={isDisabled}
                >Remove
            </button>
        </div>
        
        <div className={styles.field_wrapper}>
            <label htmlFor={`year-${index}`}>Year:</label>
            <input
                type='text' 
                id={`year-${index}`}
                autoComplete='false'
                // required
                defaultValue={formData.education[index-1].year}
                onChange={(e) => {setFormData((draft) => {draft.education[index-1][0] = e.target.value})}}
                disabled={isDisabled}
            />
        </div>
        <div className={styles.field_wrapper}>
            <label htmlFor={`location-${index}`}>Location:</label>
            <input
                type='text'
                id={`location-${index}`}
                autoComplete='false'
                // required
                defaultValue={formData.education[index-1].location}
                onChange={(e) => {setFormData((draft) => {draft.education[index-1][1] = e.target.value})}}
                disabled={isDisabled}
            />
        </div>
        <div className={styles.field_wrapper}>
            <label htmlFor={`degree-${index}`}>Degree:</label>
            <input
                type='text'
                id={`degree-${index}`}
                autoComplete='false'
                // required
                defaultValue={formData.education[index-1].degree}
                onChange={(e) => {setFormData((draft) => {draft.education[index-1][2] = e.target.value})}}
                disabled={isDisabled}
            />
        </div>
        <div className={styles.field_wrapper}>
            <label htmlFor={`institution-${index}`}>Institution:</label>
            <input
                type='text'
                id={`institution-${index}`}
                autoComplete='false'
                // required
                defaultValue={formData.education[index-1].institution}
                onChange={(e) => {setFormData((draft) => {draft.education[index-1][3] = e.target.value})}}
                disabled={isDisabled}
            />
        </div>
    </div>
  )
}

export default EducationEntry