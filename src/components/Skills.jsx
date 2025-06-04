import React from 'react'
import { useState } from 'react'
import { useImmer } from 'use-immer'
import styles from '../styles/Skills.module.css'
import InputSkills from './InputSkills.jsx'


const Skills = ({formData, setFormData, items, setItems}) => {
    const [showSubmit, setShowSubmit] = useState(true);
    const [isDisabled, setIsDisabled] = useState(false);
    const [fields, setFields] = useImmer(
        [
            {
                key: crypto.randomUUID(),
                id: '1',
                value: formData.skills[0]
            },
            {
                key: crypto.randomUUID(),
                id: '2',
                value: formData.skills[1]
            },
            {
                key: crypto.randomUUID(),
                id: '3',
                value: formData.skills[2]
            },
            {
                key: crypto.randomUUID(),
                id: '4',
                value: formData.skills[3]
            },
            {
                key: crypto.randomUUID(),
                id: '5',
                value: formData.skills[4]
            },
            {
                key: crypto.randomUUID(),
                id: '6',
                value: formData.skills[5]
            }
        ]
    );
    
    const handleSubmit = (e) => {
      e.preventDefault();
      setItems({...items, skills: formData.skills});
      setShowSubmit(!showSubmit);
      setIsDisabled(!isDisabled);
    };
  
    const handleEdit = () => {
      setShowSubmit(!showSubmit);
      setIsDisabled(!isDisabled);
    };

  return (
    <form className={styles.skills_container} onSubmit={handleSubmit}>
        <div className={styles.title}>Add professional skills info:</div>
        <div className={styles.input_container}>
            {fields.map((field) => {
                return (
                    <InputSkills
                    key={field.key}
                    id={field.id}
                    defaultValue={field.value}
                    onChange={(e) => setFormData((draft) => {draft.skills[field.id-1] = e.target.value})}
                    isDisabled={isDisabled}
                    />
                )                
            })}           
        </div>        
        <button
            id='sub'
            type='submit'
            className={`${styles.edu_submit} ${!showSubmit ? styles.hidden : null}`}
            >SUBMIT
        </button>
        <button
            id='ed'
            type='button'
            className={showSubmit ? styles.hidden : null}
            onClick={handleEdit}
            >EDIT
        </button>
    </form>
  )
}

export default Skills