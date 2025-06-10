import React from 'react'
import { useState } from 'react'
import { useImmer } from "use-immer"
import styles from '../styles/Education.module.css'
import EducationEntry from '../components/EducationEntry.jsx'

const Education = ({formData, setFormData, img, setItems, section}) => {
    const [showSubmit, setShowSubmit] = useState(true);
    const [showEdit, setShowEdit] = useState(false);
    const [entries, setEntries] = useImmer([{index: 1, key: crypto.randomUUID()}]);
    const [isDisabled, setIsDisabled] = useState(false);

    function addEntry() {
        let num = entries.length+1;
        setEntries((draft) => {draft.push({index: num, key: crypto.randomUUID()})});
        setFormData((draft) => {draft.education.push(['','','','',crypto.randomUUID()])});
    };

    function removeEntry(index) {
        setFormData((draft) => {
            draft.education.splice(index-1,1);
        });
        setEntries((draft) => {
            draft.splice(index-1, 1);
            for (let i=0; i<draft.length; i++) {draft[i].index = i+1};
        });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setItems((draft) => {draft.education = formData.education});
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
    <form className={`${styles.education_container} ${section !== 'edu' ? styles.hidden : null}`} onSubmit={handleSubmit}>
        <div className={styles.title}>Add education info:</div>
        <div className={styles.input_container}>
            {entries.map((entry) => {
                return (
                    <EducationEntry
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

export default Education