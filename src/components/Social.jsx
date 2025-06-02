import React from 'react'
import { useState } from 'react'
import styles from '../styles/Social.module.css'

const Social = ({formData, setFormData, items, setItems}) => {
    const [showSubmit, setShowSubmit] = useState(true);
    const [showEdit, setShowEdit] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setItems({...items, social: formData.social});
      setShowSubmit(!showSubmit);
      setShowEdit(!showEdit);
      e.target.firstChild.nextSibling.firstChild.firstChild.nextSibling.disabled = true;
      e.target.firstChild.nextSibling.firstChild.nextSibling.firstChild.nextSibling.disabled = true;
      e.target.firstChild.nextSibling.firstChild.nextSibling.nextSibling.firstChild.nextSibling.disabled = true;
      e.target.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.disabled = true;
      e.target.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.disabled = true;
    };
  
    const handleClick = (e) => {
      setShowSubmit(!showSubmit);
      setShowEdit(!showEdit);
      e.target.previousSibling.previousSibling.firstChild.firstChild.nextSibling.disabled = false;
      e.target.previousSibling.previousSibling.firstChild.nextSibling.firstChild.nextSibling.disabled = false;
      e.target.previousSibling.previousSibling.firstChild.nextSibling.nextSibling.firstChild.nextSibling.disabled = false;
      e.target.previousSibling.previousSibling.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.disabled = false;
      e.target.previousSibling.previousSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.disabled = false;
    };

  return (
    <form className={styles.social_container} onSubmit={handleSubmit}>
        <div className={styles.title}>Add social networks links:</div>
        <div className={styles.input_container}>
            <div className={styles.input_wrapper}>
                <label htmlFor='linkedin'><img src="../../icon/linkedin-plain.svg" alt="Linked In" /></label>
                <input
                    type='text' 
                    id='linkedin'
                    autoComplete='false'
                    // required
                    value={formData.social.linkedin}
                    onChange={(e) =>
                        setFormData(draft => {
                            draft.social.linkedin = e.target.value;   
                        })
                    }
                />
            </div>
            <div className={styles.input_wrapper}>
                <label htmlFor='github'><img src="../../icon/github-original.svg" alt="Github" /></label>
                <input
                    type='text' 
                    id='github'
                    autoComplete='false'
                    // required
                    value={formData.social.github}
                    onChange={(e) =>
                        setFormData(draft => {
                            draft.social.github = e.target.value;   
                        })
                    }
                />
            </div>
            <div className={styles.input_wrapper}>
                <label htmlFor='facebook'><img src="../../icon/facebook.svg" alt="Facebook" /></label>
                <input
                    type='text' 
                    id='facebook'
                    autoComplete='false'
                    // required
                    value={formData.social.facebook}
                    onChange={(e) =>
                        setFormData(draft => {
                            draft.social.facebook = e.target.value;   
                        })
                    }
                />
            </div>
            <div className={styles.input_wrapper}>
                <label htmlFor='twitter'><img src="../../icon/twitter-original.svg" alt="Twitter" /></label>
                <input
                    type='text' 
                    id='twitter'
                    autoComplete='false'
                    // required
                    value={formData.social.twitter}
                    onChange={(e) =>
                        setFormData(draft => {
                            draft.social.twitter = e.target.value;   
                        })
                    }
                />
            </div>
            <div className={styles.input_wrapper}>
                <label htmlFor='whatsapp'><img src="../../icon/whatsapp.svg" alt="WhatsApp" /></label>
                <input
                    type='text' 
                    id='whatsapp'
                    autoComplete='false'
                    // required
                    value={formData.social.whatsapp}
                    onChange={(e) =>
                        setFormData(draft => {
                            draft.social.whatsapp = e.target.value;   
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

export default Social