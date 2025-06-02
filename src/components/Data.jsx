import React, { useState } from 'react'
import styles from '../styles/Data.module.css'
import General from './General.jsx'
import Social from './Social.jsx'
import Education from './Education.jsx'
import Skills from './Skills.jsx'

const Data = ({formData, setFormData, items, setItems, educationEntryCount,
              addEducationEntry, shownEntries, hideEducationEntry, showEducationEntry}) => {
  const [section, setSection] = useState('gen')

  function switchSection(text) {
    if (text === 'gen') {
      console.log(text);
      setSection(text);
    } else if (text === 'soc') {
      console.log(text);
      setSection(text);
    } else if (text === 'edu') {
      console.log(text);
      setSection(text);
    } else if (text === 'ski') {
      console.log(text);
      setSection(text);
    } else if (text === 'exp') {
      console.log(text);
    };
  };

  return (
    <div className={styles.data_container}>
        <div className={styles.app_name}>CV BUILDER v1.0</div>
          <div className={styles.data_wrapper}>
            <div className={styles.buttons}>
              <div className={styles.btn_container} onClick={() => switchSection('gen')}>
                <div className={styles.img_container}>
                  <img src={'../icon/card-account-details.svg'} alt={'General info'} />
                </div>
                <div className={styles.text}>GENERAL INFO</div>
              </div>
              <div className={styles.btn_container} onClick={() => switchSection('soc')}>
                <div className={styles.img_container}>
                  <img src={'../icon/web.svg'} alt={'Social media'} />
                </div>
                <div className={styles.text}>SOCIAL MEDIA</div>
              </div>
              <div className={styles.btn_container} onClick={() => switchSection('edu')}>
                <div className={styles.img_container}>
                  <img src={'../icon/school.svg'} alt={'Education'} />
                </div>
                <div className={styles.text}>EDUCATION</div>
              </div>
              <div className={styles.btn_container} onClick={() => switchSection('ski')}>
                <div className={styles.img_container}>
                  <img src={'../icon/account-tie.svg'} alt={'Skills'} />
                </div>
                <div className={styles.text}>SKILLS</div>
              </div>
              <div className={styles.btn_container} onClick={() => switchSection('exp')}>
                <div className={styles.img_container}>
                  <img src={'../icon/briefcase-check.svg'} alt={'Experience'} />
                </div>
                <div className={styles.text}>EXPERIENCE</div>
              </div>
            </div>
            <div className={`${styles.sections_container} 
            ${section === 'gen' ? styles.gen : null}
            ${section === 'soc' ? styles.soc : null}
            ${section === 'edu' ? styles.edu : null}
            ${section === 'ski' ? styles.ski : null}`}>
              <div className={`${styles.section_wrapper} ${styles.general}`}></div>
                <General
                  formData ={formData}
                  setFormData={setFormData}
                  items={items}
                  setItems={setItems}
                />
                <Social
                  formData ={formData}
                  setFormData={setFormData}
                  items={items}
                  setItems={setItems}
                />
                <Education
                  formData ={formData}
                  setFormData={setFormData}
                  items={items}
                  setItems={setItems}
                  educationEntryCount={educationEntryCount}
                  addEducationEntry={addEducationEntry}
                  shownEntries={shownEntries}
                  hideEducationEntry={hideEducationEntry}
                  showEducationEntry={showEducationEntry}
                />
                <Skills
                  formData ={formData}
                  setFormData={setFormData}
                  items={items}
                  setItems={setItems}
                />
          </div>          
        </div>            
    </div>
  )
};

export default Data