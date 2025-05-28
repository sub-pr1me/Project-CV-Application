import React from 'react'
import styles from '../styles/Data.module.css'
import HeaderButton from './HeaderButton.jsx'
import General from './General.jsx'

const Data = ({formData, setFormData, setItems}) => {
  return (
    <div className={styles.data_container}>
        <div className={styles.app_name}>CV BUILDER v1.0</div>
          <div className={styles.data_wrapper}>
          <div className={styles.buttons}>
                <HeaderButton 
                  image={'../icon/card-account-details.svg'}
                  text={`GENERAL INFO`}
                />
                <HeaderButton 
                  image={'../icon/web.svg'}
                  text={'SOCIAL MEDIA'}
                />
                <HeaderButton 
                  image={'../icon/school.svg'}
                  text={'EDUCATION'}
                />
                <HeaderButton 
                  image={'../icon/account-tie.svg'}
                  text={'SKILLS'}
                />
                <HeaderButton 
                  image={'../icon/briefcase-check.svg'}
                  text={'EXPERIENCE'}
                />
          </div>
          <General
            formData ={formData}
            setFormData={setFormData}
            setItems={setItems}
          />
        </div>
            
    </div>
  )
}

export default Data