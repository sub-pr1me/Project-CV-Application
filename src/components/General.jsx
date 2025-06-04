import React from 'react'
import { useState } from 'react'
import styles from '../styles/General.module.css'

const General = ({formData, setFormData, items, setItems}) => {
    const [showSubmit, setShowSubmit] = useState(true);
    const [showEdit, setShowEdit] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setItems({...items, general: formData.general});
      setShowSubmit(!showSubmit);
      setShowEdit(!showEdit);
    };
  
    const handleEdit = () => {
      setShowSubmit(!showSubmit);
      setShowEdit(!showEdit);
    };

  return (
    <form className={styles.general_container} onSubmit={handleSubmit}>
        <div className={styles.title}>Add general info:</div>
        <div className={styles.input_container}>
            <div className={styles.input_wrapper}>
                <label htmlFor='firstname'>First Name:</label>
                <input
                    type='text' 
                    id='firstname'
                    autoComplete='false'
                    // required
                    value={formData.general.firstname}
                    onChange={(e) =>
                        setFormData(draft => {
                            draft.general.firstname = e.target.value;   
                        })
                    }
                />
            </div>
            <div className={styles.input_wrapper}>
                <label htmlFor='lastname'>Last Name:</label>
                <input
                    type='text' 
                    id='lastname'
                    autoComplete='false'
                    // required
                    value={formData.general.lastname}
                    onChange={(e) =>
                        setFormData(draft => {
                            draft.general.lastname = e.target.value;   
                        })
                    }
                />
            </div>
            <div className={styles.input_wrapper}>
                <label htmlFor='profession'>Profession:</label>
                <input
                    type='text' 
                    id='profession'
                    autoComplete='false'
                    // required
                    value={formData.general.profession}
                    onChange={(e) =>
                        setFormData(draft => {
                            draft.general.profession = e.target.value;   
                        })
                    }
                />
            </div>
            <div className={styles.input_wrapper}>
                <label htmlFor='location'>Location:</label>
                <input
                    type='text' 
                    id='location'
                    autoComplete='false'
                    // required
                    value={formData.general.location}
                    onChange={(e) =>
                        setFormData(draft => {
                            draft.general.location = e.target.value;   
                        })
                    }
                />
            </div>
            <div className={styles.input_wrapper}>
                <label htmlFor='phone'>Phone:</label>
                <input
                    type='tel' 
                    id='phone'
                    autoComplete='false'
                    // required
                    value={formData.general.phone}
                    onChange={(e) =>
                        setFormData(draft => {
                            draft.general.phone = e.target.value;   
                        })
                    }
                />
            </div>
            <div className={styles.input_wrapper}>
                <label htmlFor='email'>E-mail:</label>
                <input
                    type='email' 
                    id='email'
                    autoComplete='false'
                    // required
                    value={formData.general.email}
                    onChange={(e) =>
                        setFormData(draft => {
                            draft.general.email = e.target.value;   
                        })
                    }
                />
            </div>
            <div className={styles.input_wrapper}>
                <label htmlFor='summary'>Summary:</label>
                <textarea
                    type='text' 
                    id='summary'
                    autoComplete='false'
                    // required
                    value={formData.general.summary}
                    onChange={(e) =>
                        setFormData(draft => {
                            draft.general.summary = e.target.value;   
                        })
                    }
                />
            </div>
            <div className={styles.input_wrapper}>
                <label htmlFor='photo'>Upload Photo:</label>
                <input
                    type='file' 
                    id='photo'
                    autoComplete='false'
                    value={formData.general.photo}
                    onChange={(e) =>
                        setFormData(draft => {
                            draft.general.photo = e.target.value;   
                        })
                    }
                />
            </div>
        </div>        
        <button type='submit' className={showSubmit ? styles.shown : styles.hidden}>SUBMIT</button>
        <button type='button' className={showEdit ? styles.shown : styles.hidden} onClick={handleEdit}>EDIT</button>
    </form>
  )
}

export default General