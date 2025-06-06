import styles from '../styles/Mockup.module.css'


const Mockup = () => {
  return (
    <div className={styles.mockup}>
        <div className={styles.top}>
            <div className={styles.header}>
                <div className={styles.left}>
                    <div className={styles.firstname}>Firstname</div>
                    <div className={styles.lastname}>LASTNAME</div>
                    <div className={styles.profession}>PROFESSION</div>
                </div>
                <div className={styles.center}>
                    <img src='../../image/apu.jpg' alt="Photo" />
                </div>
                <div className={styles.right}>
                    <div className={styles.location}>
                        <img src='../../icon/map-marker.svg' alt="Location" />
                        <div className={styles.location_data}>LOCATION</div>
                    </div>
                    <div className={styles.phone}>
                        <img src='../../icon/phone.svg' alt="Phone" />
                        <div className={styles.phone_data}>PHONE</div>
                    </div>
                    <div className={styles.email}>
                        <img src='../../icon/email-outline.svg' alt="Email" />
                        <div className={styles.email_data}>EMAIL</div>
                    </div>
                </div>
            </div>
            <div className={styles.summary}>
                <div className={styles.title}>PROFILE SUMMARY</div>
                <div className={styles.summary_content}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</div>
            </div>
        </div>
        <div className={styles.bottom}>
            <div className={styles.bottom_left}>
                <div className={styles.social}>
                    <div className={styles.title}>SOCIAL</div>
                    <div className={styles.soc_content}>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>5</div>
                    </div>
                </div>
                <div className={styles.skills}>
                    <div className={styles.title}>SKILLS</div>
                    <div className={styles.ski_content}>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>5</div>
                        <div>6</div>

                    </div>
                </div>
                <div className={styles.education}>
                    <div className={styles.title}>EDUCATION</div>
                    <div className={styles.edu_content}>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                    </div>
                </div>
            </div>
            <div className={styles.bottom_right}>
                <div className={styles.experience}>
                    <div className={styles.title}>PROFESSIONAL EXPERIENCE</div>
                    <div className={styles.exp_content}>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Mockup