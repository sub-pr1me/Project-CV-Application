import React from 'react'
import { useState } from 'react'
import { useImmer } from "use-immer"
import styles from '../styles/Experience.module.css'
import ExperienceEntry from '../components/ExperienceEntry.jsx'

const Experience = ({formData, setFormData, img, setItems, section}) => {
    const [showSubmit, setShowSubmit] = useState(true);
    const [showEdit, setShowEdit] = useState(false);
    const [entries, setEntries] = useImmer([{index: 1, key: crypto.randomUUID()}]);
    const [isDisabled, setIsDisabled] = useState(false);

    function addEntry() {
        let num = entries.length+1;
        setEntries((draft) => {draft.push({index: num, key: crypto.randomUUID()})});
        setFormData((draft) => {draft.experience.push(['','','','',[['',crypto.randomUUID()]],crypto.randomUUID()])});
    };

    function removeEntry(index) {
        setFormData((draft) => {
            draft.experience.splice(index-1,1);
        });
        setEntries((draft) => {
            draft.splice(index-1, 1);
            for (let i=0; i<draft.length; i++) {draft[i].index = i+1};
        });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setItems((draft) => {draft.experience = formData.experience});
      if (img) {setItems((draft) => {draft.general.photo = img})};
      setShowSubmit(!showSubmit);
      setShowEdit(!showEdit);
      setIsDisabled(!isDisabled);
    };
  
    const handleEdit = () => {
      setShowSubmit(!showSubmit);
      setShowEdit(!showEdit);
      setIsDisabled(!isDisabled);
    };

  return (
    <form className={`${styles.experience_container} ${section !== 'exp' ? styles.inactive : null}`} onSubmit={handleSubmit}>
        <div className={styles.title}>Add work experience info:</div>
        <div className={styles.input_container}>
            {entries.map((entry) => {
                return (
                    <ExperienceEntry
                        formData={formData}
                        setFormData={setFormData}
                        removeEntry={removeEntry}
                        index={entry.index}
                        key={entry.key}
                        isDisabled={isDisabled}
                    />
                )
            })}
        </div>
        <button 
            type='button'
            className={`${styles.add_entry} ${entries.length > 3 ? styles.hidden : null}`}
            onClick={addEntry}
            disabled={isDisabled}
            >+Add Entry
        </button>
        <button
            id='sub'
            type='submit'
            className={`${styles.edu_submit} ${showSubmit ? styles.shown : styles.hidden}`}
            >SUBMIT
        </button>
        <button
            id='ed'
            type='button'
            className={showEdit ? styles.shown : styles.hidden}
            onClick={handleEdit}
            >EDIT
        </button>
    </form>
  )
}

export default Experience