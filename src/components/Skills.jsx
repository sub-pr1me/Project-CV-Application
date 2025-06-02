import React from 'react'
import { useState } from 'react'
import styles from '../styles/Skills.module.css'

const Skills = ({formData, setFormData, items, setItems}) => {
    const [showSubmit, setShowSubmit] = useState(true);
    const [showEdit, setShowEdit] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setItems({...items, skills: formData.skills});
      setShowSubmit(!showSubmit);
      setShowEdit(!showEdit);
      e.target.firstChild.nextSibling.firstChild.firstChild.nextSibling.disabled = true;
      e.target.firstChild.nextSibling.firstChild.nextSibling.firstChild.nextSibling.disabled = true;
      e.target.firstChild.nextSibling.firstChild.nextSibling.nextSibling.firstChild.nextSibling.disabled = true;
      e.target.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.disabled = true;
      e.target.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.disabled = true;
      e.target.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.disabled = true;
    };
  
    const handleClick = (e) => {
      setShowSubmit(!showSubmit);
      setShowEdit(!showEdit);
      e.target.previousSibling.previousSibling.firstChild.firstChild.nextSibling.disabled = false;
      e.target.previousSibling.previousSibling.firstChild.nextSibling.firstChild.nextSibling.disabled = false;
      e.target.previousSibling.previousSibling.firstChild.nextSibling.nextSibling.firstChild.nextSibling.disabled = false;
      e.target.previousSibling.previousSibling.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.disabled = false;
      e.target.previousSibling.previousSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.disabled = false;
      e.target.previousSibling.previousSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.disabled = false;
    };

  return (
    <form className={styles.skills_container} onSubmit={handleSubmit}>
        <div className={styles.title}>Add professional skills info:</div>
        <div className={styles.input_container}>
            <div className={styles.input_wrapper}>
                <label htmlFor='01'># 1:</label>
                <input
                    type='text' 
                    id='01'
                    autoComplete='false'
                    // required
                    value={formData.skills[0]}
                    onChange={(e) =>
                        setFormData(draft => {
                            draft.skills[0] = e.target.value;
                        })
                    }
                />
            </div>
            <div className={styles.input_wrapper}>
                <label htmlFor='02'># 2:</label>
                <input
                    type='text' 
                    id='02'
                    autoComplete='false'
                    // required
                    value={formData.skills[1]}
                    onChange={(e) =>
                        setFormData(draft => {
                            draft.skills[1] = e.target.value;
                        })
                    }
                />
            </div>
            <div className={styles.input_wrapper}>
                <label htmlFor='03'># 3:</label>
                <input
                    type='text' 
                    id='03'
                    autoComplete='false'
                    // required
                    value={formData.skills[2]}
                    onChange={(e) =>
                        setFormData(draft => {
                            draft.skills[2] = e.target.value;
                        })
                    }
                />
            </div>
            <div className={styles.input_wrapper}>
                <label htmlFor='04'># 4:</label>
                <input
                    type='text' 
                    id='04'
                    autoComplete='false'
                    // required
                    value={formData.skills[3]}
                    onChange={(e) =>
                        setFormData(draft => {
                            draft.skills[3] = e.target.value;
                        })
                    }
                />
            </div>
            <div className={styles.input_wrapper}>
                <label htmlFor='05'># 5:</label>
                <input
                    type='text' 
                    id='05'
                    autoComplete='false'
                    // required
                    value={formData.skills[4]}
                    onChange={(e) =>
                        setFormData(draft => {
                            draft.skills[4] = e.target.value;
                        })
                    }
                />
            </div>
            <div className={styles.input_wrapper}>
                <label htmlFor='06'># 6:</label>
                <input
                    type='text' 
                    id='06'
                    autoComplete='false'
                    // required
                    value={formData.skills[5]}
                    onChange={(e) =>
                        setFormData(draft => {
                            draft.skills[5] = e.target.value;
                        })
                    }
                />
            </div>
        </div>        
        <button type='submit' className={showSubmit ? styles.shown : styles.hidden}>SUBMIT</button>
        <button type='button' className={showEdit ? styles.shown : styles.hidden} onClick={handleClick}>EDIT</button>
    </form>
  )
}

export default Skills