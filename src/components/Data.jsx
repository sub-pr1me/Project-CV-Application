import React, { useState } from 'react'
import styles from '../styles/Data.module.css'

import SectionButton from './SectionButton.jsx'
import General from './General.jsx'
import Social from './Social.jsx'
import Education from './Education.jsx'
import Skills from './Skills.jsx'
import Experience from './Experience.jsx'

const Data = ({items, setItems, formData, setFormData}) => {
  const [section, setSection] = useState('gen')

  function switchSection(chosen) {
    if (chosen === 'gen') {
      setSection(chosen);
    } else if (chosen === 'soc') {
      setSection(chosen);
    } else if (chosen === 'edu') {
      setSection(chosen);
    } else if (chosen === 'ski') {
      setSection(chosen);
    } else if (chosen === 'exp') {
      setSection(chosen);
    };
  };

  return (
    <div className={styles.data_container}>
        <div className={styles.app_name}>CV BUILDER v1.0</div>
          <div className={styles.data_wrapper}>
            <div className={styles.buttons}>
              <SectionButton
                switchSection={switchSection}
                id={'gen'}
                src={'../icon/card-account-details.svg'}
                text={'GENERAL INFO'}
              />
              <SectionButton
                switchSection={switchSection}
                id={'soc'}
                src={'../icon/web.svg'}
                text={'SOCIAL MEDIA'}
              />
              <SectionButton
                switchSection={switchSection}
                id={'edu'}
                src={'../icon/school.svg'}
                text={'EDUCATION'}
              />
              <SectionButton
                switchSection={switchSection}
                id={'ski'}
                src={'../icon/account-tie.svg'}
                text={'SKILLS'}
              />
              <SectionButton
                switchSection={switchSection}
                id={'exp'}
                src={'../icon/briefcase-check.svg'}
                text={'EXPERIENCE'}
              />
            </div>
            <div className={`${styles.sections_container}
                             ${section === 'gen' ? styles.gen : null}
                             ${section === 'soc' ? styles.soc : null}
                             ${section === 'edu' ? styles.edu : null}
                             ${section === 'ski' ? styles.ski : null}
                             ${section === 'exp' ? styles.exp : null}`}>
              <div className={`${styles.section_wrapper} ${styles.general}`}></div>
                <General
                  items={items}
                  setItems={setItems}
                  formData ={formData}
                  setFormData={setFormData}
                />
                <Social
                  items={items}
                  setItems={setItems}
                  formData ={formData}
                  setFormData={setFormData}
                />
                <Education
                  items={items}
                  setItems={setItems}
                  formData ={formData}
                  setFormData={setFormData}
                />
                <Skills
                  items={items}
                  setItems={setItems}
                  formData ={formData}
                  setFormData={setFormData}
                />
                <Experience
                  items={items}
                  setItems={setItems}
                  formData ={formData}
                  setFormData={setFormData}
                />
          </div>          
        </div>            
    </div>
  )
};

export default Data