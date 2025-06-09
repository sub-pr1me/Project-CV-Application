import React from 'react'
import styles from '../styles/Social.module.css'
import { useState } from 'react'
import { useImmer } from 'use-immer';
import InputSocial from './InputSocial';

const Social = ({formData, setFormData, items, setItems}) => {
    const [showSubmit, setShowSubmit] = useState(true);
    const [fields, setFields] = useImmer(
        [
            {
                key: crypto.randomUUID(),
                id: 'linkedin',
                alt: 'Linked In',
                src: '../../icon/linkedin-plain.svg',
                value: formData.social[0][2],
                onChange: (e) => {setFormData(draft => {draft.social[0][2] = e.target.value})}
            },
            {
                key: crypto.randomUUID(),
                id: 'github',
                alt: 'Github',
                src: '../../icon/github-original.svg',
                value: formData.social[1][2],
                onChange: (e) => {setFormData(draft => {draft.social[1][2] = e.target.value})}
            },
            {
                key: crypto.randomUUID(),
                id: 'facebook',
                alt: 'Facebook',
                src: '../../icon/facebook.svg',
                value: formData.social[2][2],
                onChange: (e) => {setFormData(draft => {draft.social[2][2] = e.target.value})}
            },
            {
                key: crypto.randomUUID(),
                id: 'twitter',
                alt: 'Twitter',
                src: '../../icon/twitter-original.svg',
                value: formData.social[3][2],
                onChange: (e) => {setFormData(draft => {draft.social[3][2] = e.target.value})}
            },
            {
                key: crypto.randomUUID(),
                id: 'whatsapp',
                alt: 'WhatsApp',
                src: '../../icon/whatsapp.svg',
                value: formData.social[4][2],
                onChange: (e) => {setFormData(draft => {draft.social[4][2] = e.target.value})}
            }
        ]
    );
    const [isDisabled, setIsDisabled] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setItems({...items, social: formData.social});
      setShowSubmit(!showSubmit);
      setIsDisabled(!isDisabled);
    };
  
    const handleEdit = () => {
      setShowSubmit(!showSubmit);
      setIsDisabled(!isDisabled);
    };

  return (
    <form className={styles.social_container} onSubmit={handleSubmit}>
        <div className={styles.title}>Add social networks links:</div>
        <div className={styles.input_container}>
            {fields.map((field) => {
                    return (
                        <InputSocial
                            key={field.key}
                            id={field.id}
                            alt={field.alt}
                            src={field.src}
                            defaultValue={field.value}
                            onChange={field.onChange}
                            isDisabled={isDisabled}
                        />
                    )
                })
            }
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

export default Social