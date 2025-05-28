import React from 'react'
import { useState } from 'react'
import styles from '../styles/General.module.css'

const General = ({formData, setFormData, setItems}) => {
    const [showSubmit, setShowSubmit] = useState(true);
    const [showEdit, setShowEdit] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setItems(formData);
      setShowSubmit(!showSubmit);
      setShowEdit(!showEdit);
      e.target.firstChild.nextSibling.firstChild.firstChild.nextSibling.disabled = true;
      e.target.firstChild.nextSibling.firstChild.nextSibling.firstChild.nextSibling.disabled = true;
      e.target.firstChild.nextSibling.firstChild.nextSibling.nextSibling.firstChild.nextSibling.disabled = true;
      e.target.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.disabled = true;
      e.target.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.disabled = true;
      e.target.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.disabled = true;
      e.target.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.disabled = true;
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
      e.target.previousSibling.previousSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.disabled = false;
    };

  return (
    <form className={styles.general_container} onSubmit={handleSubmit}>
        <div className={styles.title}>Enter your general info:</div>
        <div className={styles.input_container}>
            <div className={styles.input_wrapper}>
                <label htmlFor='firstname'>First Name:</label>
                <input
                    type='text' 
                    id='firstname'
                    autoComplete='false'
                    required
                    value={formData.firstname}
                    onChange={(e) =>
                        setFormData(
                            {...formData, firstname: e.target.value})
                    }
                />
            </div>
            <div className={styles.input_wrapper}>
                <label htmlFor='lastname'>Last Name:</label>
                <input
                    type='text' 
                    id='lastname'
                    autoComplete='false'
                    required
                    value={formData.lastname}
                    onChange={(e) =>
                        setFormData(
                            {...formData, lastname: e.target.value})
                    }
                />
            </div>
            <div className={styles.input_wrapper}>
                <label htmlFor='profession'>Profession:</label>
                <input
                    type='text' 
                    id='profession'
                    autoComplete='false'
                    required
                    value={formData.profession}
                    onChange={(e) =>
                        setFormData(
                            {...formData, profession: e.target.value})
                    }
                />
            </div>
            <div className={styles.input_wrapper}>
                <label htmlFor='location'>Location:</label>
                <input
                    type='text' 
                    id='location'
                    autoComplete='false'
                    required
                    value={formData.location}
                    onChange={(e) =>
                        setFormData(
                            {...formData, location: e.target.value})
                    }
                />
            </div>
            <div className={styles.input_wrapper}>
                <label htmlFor='phone'>Phone:</label>
                <input
                    type='tel' 
                    id='phone'
                    autoComplete='false'
                    required
                    value={formData.phone}
                    onChange={(e) =>
                        setFormData(
                            {...formData, phone: e.target.value})
                    }
                />
            </div>
            <div className={styles.input_wrapper}>
                <label htmlFor='email'>E-mail:</label>
                <input
                    type='email' 
                    id='email'
                    autoComplete='false'
                    required
                    value={formData.email}
                    onChange={(e) =>
                        setFormData(
                            {...formData, email: e.target.value})
                    }
                />
            </div>
            <div className={styles.input_wrapper}>
                <label htmlFor='photo'>Upload Photo:</label>
                <input
                    type='file' 
                    id='photo'
                    autoComplete='false'
                    value={formData.photo}
                    onChange={(e) =>
                        setFormData(
                            {...formData, photo: e.target.value})
                    }
                />
            </div>
        </div>        
        <button type='submit' className={showSubmit ? styles.shown : styles.hidden}>SUBMIT</button>
        <button type='button' className={showEdit ? styles.shown : styles.hidden} onClick={handleClick}>EDIT</button>
    </form>
  )
}

export default General