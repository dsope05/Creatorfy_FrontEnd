import styles from '../styles/services.module.css'

export default function Services() {
  return (
    <div>
      <div className={styles.menu}>
        <span className={`${styles.servicesMenuButton} ${styles.selected}`}>
          Services
        </span>
        <span className={styles.merchMenuButton}>
          Merch
        </span>
      </div>
      <div className={styles.servicesContainer}>
        <div className={styles.service}>
          Service
        </div>
        <div className={styles.service}>
          Service
        </div>
        <div className={styles.service}>
          Service
        </div>
        <div className={styles.service}>
          Service
        </div>
      </div>
    </div>
  )
}
