import React from 'react'
import styles from '../styles/Form.module.css'
import HeaderButton from '../components/HeaderButton.jsx'

const Form = () => {
  return (
    <div className={styles.form_container}>
        <div className={styles.app_name}>CV BUILDER v1.0</div>
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
    </div>
  )
}

export default Form