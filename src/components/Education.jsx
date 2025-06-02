import React from 'react'
import { useState } from 'react'
import styles from '../styles/Education.module.css'

const Education = ({formData, setFormData, items, setItems, educationEntryCount,
                    addEducationEntry, shownEntries, hideEducationEntry, showEducationEntry}) => {
    const [showSubmit, setShowSubmit] = useState(true);
    const [showEdit, setShowEdit] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setItems({...items, education: formData.education});
      setShowSubmit(!showSubmit);
      setShowEdit(!showEdit);
      e.target.parentNode.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.firstChild.nextSibling.firstChild.nextSibling.disabled = true;
      e.target.parentNode.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.firstChild.nextSibling.nextSibling.firstChild.nextSibling.disabled = true;
      e.target.parentNode.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.disabled = true;
      e.target.parentNode.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.disabled = true;

      e.target.parentNode.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling.firstChild.nextSibling.firstChild.nextSibling.disabled = true;
      e.target.parentNode.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling.firstChild.nextSibling.nextSibling.firstChild.nextSibling.disabled = true;
      e.target.parentNode.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.disabled = true;
      e.target.parentNode.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.disabled = true;

      e.target.parentNode.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling.disabled = true;
      e.target.parentNode.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.firstChild.nextSibling.disabled = true;
      e.target.parentNode.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.disabled = true;
      e.target.parentNode.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.disabled = true;

      e.target.parentNode.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling.disabled = true;
      e.target.parentNode.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.firstChild.nextSibling.disabled = true;
      e.target.parentNode.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.disabled = true;
      e.target.parentNode.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.disabled = true;

      e.target.parentNode.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling.disabled = true;
      e.target.parentNode.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.firstChild.nextSibling.disabled = true;
      e.target.parentNode.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.disabled = true;
      e.target.parentNode.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.disabled = true;
    };
  
    const handleClick = (e) => {
      setShowSubmit(!showSubmit);
      setShowEdit(!showEdit);
      e.target.parentNode.firstChild.nextSibling.firstChild.firstChild.nextSibling.firstChild.nextSibling.disabled = false;
      e.target.parentNode.firstChild.nextSibling.firstChild.firstChild.nextSibling.nextSibling.firstChild.nextSibling.disabled = false;
      e.target.parentNode.firstChild.nextSibling.firstChild.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.disabled = false;
      e.target.parentNode.firstChild.nextSibling.firstChild.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.disabled = false;

      e.target.parentNode.firstChild.nextSibling.firstChild.nextSibling.firstChild.nextSibling.firstChild.nextSibling.disabled = false;
      e.target.parentNode.firstChild.nextSibling.firstChild.nextSibling.firstChild.nextSibling.nextSibling.firstChild.nextSibling.disabled = false;
      e.target.parentNode.firstChild.nextSibling.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.disabled = false;
      e.target.parentNode.firstChild.nextSibling.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.disabled = false;

      e.target.parentNode.firstChild.nextSibling.firstChild.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling.disabled = false;
      e.target.parentNode.firstChild.nextSibling.firstChild.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.firstChild.nextSibling.disabled = false;
      e.target.parentNode.firstChild.nextSibling.firstChild.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.disabled = false;
      e.target.parentNode.firstChild.nextSibling.firstChild.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.disabled = false;

      e.target.parentNode.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling.disabled = false;
      e.target.parentNode.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.firstChild.nextSibling.disabled = false;
      e.target.parentNode.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.disabled = false;
      e.target.parentNode.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.disabled = false;

      e.target.parentNode.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling.disabled = false;
      e.target.parentNode.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.firstChild.nextSibling.disabled = false;
      e.target.parentNode.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.disabled = false;
      e.target.parentNode.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.disabled = false;
    };

  return (
    <form className={styles.education_container} onSubmit={handleSubmit}>
        <div className={styles.title}>Add education info:</div>
        <div className={styles.input_container}>
            <div className={styles.input_wrapper}>
                <div className={styles.entry_title}>
                    <div className={styles.entry_number}># 1</div>
                    <button type='button' className={`${styles.entry_hide} ${shownEntries.one === 1 ? styles.shown : styles.hidden}`} onClick={hideEducationEntry}>Hide</button>
                    <button type='button' className={`${styles.entry_show} ${shownEntries.one === 2 ? styles.shown : styles.hidden}`} onClick={showEducationEntry}>Show</button>
                </div>
                <div className={`${styles.entry_wrapper} ${shownEntries.one === 2 ? styles.hidden : styles.shownFlex}`}>
                    <label htmlFor='year1'>Year:</label>
                    <input
                        type='text' 
                        id='year1'
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
                <div className={`${styles.entry_wrapper} ${shownEntries.one === 2 ? styles.hidden : styles.shownFlex}`}>
                    <label htmlFor='location1'>Location:</label>
                    <input
                        type='text' 
                        id='location1'
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
                <div className={`${styles.entry_wrapper} ${shownEntries.one === 2 ? styles.hidden : styles.shownFlex}`}>
                    <label htmlFor='degree1'>Degree:</label>
                    <input
                        type='text' 
                        id='degree1'
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
                <div className={`${styles.entry_wrapper} ${shownEntries.one === 2 ? styles.hidden : styles.shownFlex}`}>
                    <label htmlFor='institution1'>Institution:</label>
                    <input
                        type='text' 
                        id='institution1'
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
            <div className={`${styles.input_wrapper} ${shownEntries.two === 0 ? styles.hidden : styles.shownFlex}`}>
                <div className={styles.entry_title}>
                    <div className={styles.entry_number}># 2</div>
                    <button type='button' className={`${styles.entry_hide} ${shownEntries.two === 1 ? styles.shown : styles.hidden}`} onClick={hideEducationEntry}>Hide</button>
                    <button type='button' className={`${styles.entry_show} ${shownEntries.two === 2 ? styles.shown : styles.hidden}`} onClick={showEducationEntry}>Show</button>
                </div>
                <div className={`${styles.entry_wrapper} ${shownEntries.two === 2 ? styles.hidden : styles.shownFlex}`}>
                    <label htmlFor='year2'>Year:</label>
                    <input
                        type='text' 
                        id='year2'
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
                <div className={`${styles.entry_wrapper} ${shownEntries.two === 2 ? styles.hidden : styles.shownFlex}`}>
                    <label htmlFor='location2'>Location:</label>
                    <input
                        type='text' 
                        id='location2'
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
                <div className={`${styles.entry_wrapper} ${shownEntries.two === 2 ? styles.hidden : styles.shownFlex}`}>
                    <label htmlFor='degree2'>Degree:</label>
                    <input
                        type='text' 
                        id='degree2'
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
                <div className={`${styles.entry_wrapper} ${shownEntries.two === 2 ? styles.hidden : styles.shownFlex}`}>
                    <label htmlFor='institution2'>Institution:</label>
                    <input
                        type='text' 
                        id='institution2'
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
            <div className={`${styles.input_wrapper} ${shownEntries.three === 0 ? styles.hidden : styles.shownFlex}`}>
                <div className={styles.entry_title}>
                    <div className={styles.entry_number}># 3</div>
                    <button type='button' className={`${styles.entry_hide} ${shownEntries.three === 1 ? styles.shown : styles.hidden}`} onClick={hideEducationEntry}>Hide</button>
                    <button type='button' className={`${styles.entry_show} ${shownEntries.three === 2 ? styles.shown : styles.hidden}`} onClick={showEducationEntry}>Show</button>
                </div>
                <div className={`${styles.entry_wrapper} ${shownEntries.three === 2 ? styles.hidden : styles.shownFlex}`}>
                    <label htmlFor='year3'>Year:</label>
                    <input
                        type='text' 
                        id='year3'
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
                <div className={`${styles.entry_wrapper} ${shownEntries.three === 2 ? styles.hidden : styles.shownFlex}`}>
                    <label htmlFor='location3'>Location:</label>
                    <input
                        type='text' 
                        id='location3'
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
                <div className={`${styles.entry_wrapper} ${shownEntries.three === 2 ? styles.hidden : styles.shownFlex}`}>
                    <label htmlFor='degree3'>Degree:</label>
                    <input
                        type='text' 
                        id='degree3'
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
                <div className={`${styles.entry_wrapper} ${shownEntries.three === 2 ? styles.hidden : styles.shownFlex}`}>
                    <label htmlFor='institution3'>Institution:</label>
                    <input
                        type='text' 
                        id='institution3'
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
            <div className={`${styles.input_wrapper} ${shownEntries.four === 0 ? styles.hidden : styles.shownFlex}`}>
                <div className={styles.entry_title}>
                    <div className={styles.entry_number}># 4</div>
                    <button type='button' className={`${styles.entry_hide} ${shownEntries.four === 1 ? styles.shown : styles.hidden}`} onClick={hideEducationEntry}>Hide</button>
                    <button type='button' className={`${styles.entry_show} ${shownEntries.four === 2 ? styles.shown : styles.hidden}`} onClick={showEducationEntry}>Show</button>
                </div>
                <div className={`${styles.entry_wrapper} ${shownEntries.four === 2 ? styles.hidden : styles.shownFlex}`}>
                    <label htmlFor='year4'>Year:</label>
                    <input
                        type='text' 
                        id='year4'
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
                <div className={`${styles.entry_wrapper} ${shownEntries.four === 2 ? styles.hidden : styles.shownFlex}`}>
                    <label htmlFor='location4'>Location:</label>
                    <input
                        type='text' 
                        id='location4'
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
                <div className={`${styles.entry_wrapper} ${shownEntries.four === 2 ? styles.hidden : styles.shownFlex}`}>
                    <label htmlFor='degree4'>Degree:</label>
                    <input
                        type='text' 
                        id='degree4'
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
                <div className={`${styles.entry_wrapper} ${shownEntries.four === 2 ? styles.hidden : styles.shownFlex}`}>
                    <label htmlFor='institution4'>Institution:</label>
                    <input
                        type='text' 
                        id='institution4'
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
            <div className={`${styles.input_wrapper} ${shownEntries.five === 0 ? styles.hidden : styles.shownFlex}`}>
                <div className={styles.entry_title}>
                    <div className={styles.entry_number}># 5</div>
                    <button type='button' className={`${styles.entry_hide} ${shownEntries.five === 1 ? styles.shown : styles.hidden}`} onClick={hideEducationEntry}>Hide</button>
                    <button type='button' className={`${styles.entry_show} ${shownEntries.five === 2 ? styles.shown : styles.hidden}`} onClick={showEducationEntry}>Show</button>
                </div>
                <div className={`${styles.entry_wrapper} ${shownEntries.five === 2 ? styles.hidden : styles.shownFlex}`}>
                    <label htmlFor='year5'>Year:</label>
                    <input
                        type='text' 
                        id='year5'
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
                <div className={`${styles.entry_wrapper} ${shownEntries.five === 2 ? styles.hidden : styles.shownFlex}`}>
                    <label htmlFor='location5'>Location:</label>
                    <input
                        type='text' 
                        id='location5'
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
                <div className={`${styles.entry_wrapper} ${shownEntries.five === 2 ? styles.hidden : styles.shownFlex}`}>
                    <label htmlFor='degree5'>Degree:</label>
                    <input
                        type='text' 
                        id='degree5'
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
                <div className={`${styles.entry_wrapper} ${shownEntries.five === 2 ? styles.hidden : styles.shownFlex}`}>
                    <label htmlFor='institution5'>Institution:</label>
                    <input
                        type='text' 
                        id='institution5'
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
                    className={`${styles.add_entry} ${educationEntryCount < 4 ? styles.shown : styles.hidden}`}
                    onClick={(e) => {
                        addEducationEntry(e);
                    }}>+Add Entry</button>
        </div>
        <button id='sub' type='submit' className={`${styles.edu_submit} ${showSubmit ? styles.shown : styles.hidden}`}>SUBMIT</button>
        <button id='ed' type='button' className={showEdit ? styles.shown : styles.hidden} onClick={handleClick}>EDIT</button>
    </form>
  )
}

export default Education