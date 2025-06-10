import styles from '../styles/Mockup.module.css'


const Mockup = ({items}) => {

  return (
    <div className={styles.mockup}>
        <div className={styles.top}>
            <div className={styles.header}>
                <div className={styles.left}>
                    <div className={styles.firstname}>{items.general.firstname}</div>
                    <div className={styles.lastname}>{items.general.lastname}</div>
                    <div className={styles.profession}>{items.general.profession}</div>
                </div>
                <div className={styles.center}>
                    <img src={items.general.photo} alt="Photo" />
                </div>
                <div className={styles.right}>
                    <div className={styles.location}>
                        <img src='../../icon/map-marker.svg' alt="Location" />
                        <div className={styles.location_data}>{items.general.location}</div>
                    </div>
                    <div className={styles.phone}>
                        <img src='../../icon/phone.svg' alt="Phone" />
                        <div className={styles.phone_data}>{items.general.phone}</div>
                    </div>
                    <div className={styles.email}>
                        <img src='../../icon/email-outline.svg' alt="Email" />
                        <div className={styles.email_data}>{items.general.email}</div>
                    </div>
                </div>
            </div>
            <div className={styles.summary}>
                <div className={styles.title}>PROFILE SUMMARY</div>
                <div className={styles.summary_content}>{items.general.summary}</div>
            </div>
        </div>
        <div className={styles.bottom}>
            <div className={styles.bottom_left}>
                <div className={styles.social}>
                    <div className={styles.title}>SOCIAL</div>
                    <div className={styles.soc_content}>
                        {items.social.map((item) => {
                            if (item[2] !== '') {
                                return (
                                    <div key={item[3]} className={styles.soc_item}>
                                        <img className={styles.soc_img} src={`${item[1]}`} alt={`${item[0]}`} />
                                        <div className={styles.soc_link}>{item[2]}</div>
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>
                <div className={styles.skills}>
                    <div className={styles.title}>SKILLS</div>
                    <div className={styles.ski_content}>
                        {items.skills.map((item) => {
                                if (item[1] !== '') {
                                    return (
                                        <div key={item[2]} className={styles.ski_item}>
                                            <img className={styles.ski_img} src={`${item[0]}`} alt={item[1]} />
                                            <div className={styles.ski_name}>{item[1]}</div>
                                        </div>
                                    )
                                }
                            })}
                    </div>
                </div>
                <div className={styles.education}>
                    <div className={styles.title}>EDUCATION</div>
                    <div className={styles.edu_content}>
                        {items.education.map((item) => {
                                return (
                                    <div key={item[4]} className={styles.edu_item}>
                                       <div className={styles.edu_left}>
                                        <div>{item[0]}</div>
                                        <div>{item[1]}</div>
                                       </div>
                                       <div className={styles.edu_right}>
                                        <div>{item[2]}</div>
                                        <div className={styles.bold_italic}>{item[3]}</div>
                                       </div>
                                    </div>
                                )
                        })}
                    </div>
                </div>
            </div>
            <div className={styles.bottom_right}>
                <div className={styles.experience}>
                    <div className={styles.title}>PROFESSIONAL EXPERIENCE</div>
                    <div className={styles.exp_content}>
                        {items.experience.map((item => {
                            return (
                                <div key={item[5]} className={styles.exp_item}>
                                    <div className={styles.exp_left}>
                                        <div>{item[0]}</div>
                                        <div>{item[1]}</div>
                                    </div>
                                    <div className={styles.exp_right}>
                                        <div>{item[2]}</div>
                                        <div>{item[3]}</div>
                                        <ul>
                                            {item[4].map((element) => {
                                                return (
                                                    <li key={element[1]}>{`• ${element[0]}`}</li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            )
                        }))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Mockup