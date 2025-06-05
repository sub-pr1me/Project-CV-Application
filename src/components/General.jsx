import React from 'react'
import { useState } from 'react'
import { useImmer } from "use-immer"
import styles from '../styles/General.module.css'
import InputGeneral from './InputGeneral.jsx'

const General = ({formData, setFormData, items, setItems}) => {
    const [showSubmit, setShowSubmit] = useState(true);
    const [showEdit, setShowEdit] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const [fields, setFielfds] = useImmer(
        [
            {
                key: crypto.randomUUID(),
                id: 'firstname',
                value: formData.general.firstname,
                type: 'text',
                onChange: (e) => setFormData(draft => {draft.general.firstname = e.target.value}),
                title: 'First Name:'
            },
            {
                key: crypto.randomUUID(),
                id: 'lastname',
                value: formData.general.lastname,
                type: 'text',
                onChange: (e) => setFormData(draft => {draft.general.lastname = e.target.value}),
                title: 'Last Name:'
            },
            {
                key: crypto.randomUUID(),
                id: 'profession',
                value: formData.general.profession,
                type: 'text',
                onChange: (e) => setFormData(draft => {draft.general.profession = e.target.value}),
                title: 'Profession:'
            },
            {
                key: crypto.randomUUID(),
                id: 'location',
                value: formData.general.location,
                type: 'text',
                onChange: (e) => setFormData(draft => {draft.general.location = e.target.value}),
                title: 'Location:'
            },
            {
                key: crypto.randomUUID(),
                id: 'phone',
                value: formData.general.phone,
                type: 'text',
                onChange: (e) => setFormData(draft => {draft.general.phone = e.target.value}),
                title: 'Phone:'
            },
            {
                key: crypto.randomUUID(),
                id: 'email',
                value: formData.general.email,
                type: 'text',
                onChange: (e) => setFormData(draft => {draft.general.email = e.target.value}),
                title: 'E-mail:'
            },
            {
                key: crypto.randomUUID(),
                id: 'summary',
                value: formData.general.summary,
                type: 'text',
                onChange: (e) => setFormData(draft => {draft.general.summary = e.target.value}),
                title: 'Summary:'
            },
            {
                key: crypto.randomUUID(),
                id: 'photo',
                value: formData.general.photo,
                type: 'file',
                onChange: (e) => setFormData(draft => {draft.general.photo = e.target.value}),
                title: 'Upload Photo:'
            }
        ]
    );
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setItems({...items, general: formData.general});
      setShowSubmit(!showSubmit);
      setIsDisabled(!isDisabled);
    };
  
    const handleEdit = () => {
      setShowSubmit(!showSubmit);
      setShowEdit(!showEdit);
      setIsDisabled(!isDisabled)
    };

  return (
    <form className={styles.general_container} onSubmit={handleSubmit}>
        <div className={styles.title}>Add general info:</div>
        <div className={styles.input_container}>
            {fields.map((field) => {
                if (field.id !== 'summary' && field.id !== 'photo') {
                    return (
                        <InputGeneral
                            key={field.key}
                            id={field.id}
                            defaultValue={field.value}
                            type={field.type}
                            onChange={field.onChange}
                            title={field.title}
                            isDisabled={isDisabled}
                        />                    
                    )
                }                
            })}
            <div className={styles.input_wrapper}>
                <label htmlFor='summary'>Summary:</label>
                <textarea
                    type='text'
                    id='summary'
                    autoComplete='false'
                    // required
                    defaultValue={formData.general.summary}
                    onChange={(e) => setFormData(draft => {draft.general.summary = e.target.value})}
                    disabled={isDisabled}
                />
            </div>
            {fields.map((field) => {
                if (field.id === 'photo') {
                    return (
                        <InputGeneral
                            key={field.key}
                            id={field.id}
                            defaultValue={field.value}
                            type={field.type}
                            onChange={field.onChange}
                            title={field.title}
                            isDisabled={isDisabled}
                        />                    
                    )
                }                
            })}
        </div>        
        <button
            type='submit'
            className={`${styles.gen_sub} ${!showSubmit ? styles.hidden : null}`}
            >SUBMIT
        </button>
        <button
            type='button'
            className={showSubmit ? styles.hidden : null}
            onClick={handleEdit}
            >EDIT
        </button>
    </form>
  )
}

export default General