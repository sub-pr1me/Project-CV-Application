import React from 'react'
import { useState } from 'react'
import styles from '../styles/Education.module.css'

const Education = ({formData, setFormData, setItems, educationEntryCount, addEducationEntry}) => {
    const [showSubmit, setShowSubmit] = useState(true);
    const [showEdit, setShowEdit] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setItems(formData);
      setShowSubmit(!showSubmit);
      setShowEdit(!showEdit);
      e.target.parentNode.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.firstChild.firstChild.nextSibling.disabled = true;
      e.target.parentNode.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.firstChild.nextSibling.firstChild.nextSibling.disabled = true;
      e.target.parentNode.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.firstChild.nextSibling.nextSibling.firstChild.nextSibling.disabled = true;
      e.target.parentNode.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.disabled = true;
    };
  
    const handleClick = (e) => {
      setShowSubmit(!showSubmit);
      setShowEdit(!showEdit);
      e.target.parentNode.firstChild.nextSibling.firstChild.firstChild.firstChild.nextSibling.disabled = false;
      e.target.parentNode.firstChild.nextSibling.firstChild.firstChild.nextSibling.firstChild.nextSibling.disabled = false;
      e.target.parentNode.firstChild.nextSibling.firstChild.firstChild.nextSibling.nextSibling.firstChild.nextSibling.disabled = false;
      e.target.parentNode.firstChild.nextSibling.firstChild.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.disabled = false;
    };

  return (
    <form className={styles.education_container} onSubmit={handleSubmit}>
        <div className={styles.title}>Add education info:</div>
        <div className={styles.input_container}>
            <div className={styles.input_wrapper}>
                <div className={styles.entry_wrapper}>
                    <label htmlFor='year'>Year:</label>
                    <input
                        type='text' 
                        id='year'
                        autoComplete='false'
                        // required
                        value={formData.education[educationEntryCount].year}
                        onChange={(e) =>
                            setFormData(draft => {
                                draft.education[educationEntryCount].year = e.target.value;   
                            })
                        }
                    />
                </div>
                <div className={styles.entry_wrapper}>
                    <label htmlFor='location'>Location:</label>
                    <input
                        type='text' 
                        id='location'
                        autoComplete='false'
                        // required
                        value={formData.education[educationEntryCount].location}
                        onChange={(e) =>
                            setFormData(draft => {
                                draft.education[educationEntryCount].location = e.target.value;   
                            })
                        }
                    />
                </div>
                <div className={styles.entry_wrapper}>
                    <label htmlFor='degree'>Degree:</label>
                    <input
                        type='text' 
                        id='degree'
                        autoComplete='false'
                        // required
                        value={formData.education[educationEntryCount].degree}
                        onChange={(e) =>
                            setFormData(draft => {
                                draft.education[educationEntryCount].degree = e.target.value;   
                            })
                        }
                    />
                </div>
                <div className={styles.entry_wrapper}>
                    <label htmlFor='institution'>Institution:</label>
                    <input
                        type='text' 
                        id='institution'
                        autoComplete='false'
                        // required
                        value={formData.education[educationEntryCount].institution}
                        onChange={(e) =>
                            setFormData(draft => {
                                draft.education[educationEntryCount].institution = e.target.value;   
                            })
                        }
                    />
                </div>
            </div>
            <button type='button'
                    className={`${styles.add_entry} ${showEdit ? styles.shown : styles.hidden}`}
                    onClick={(e) => {
                        addEducationEntry(e);
                        setShowSubmit(!showSubmit);
                        setShowEdit(!showEdit);
                    }}>+Add More</button>
        </div>
        <button type='submit' className={`${styles.edu_submit} ${showSubmit ? styles.shown : styles.hidden}`}>SUBMIT</button>
        <button type='button' className={showEdit ? styles.shown : styles.hidden} onClick={handleClick}>EDIT</button>
    </form>
  )
}

export default Education