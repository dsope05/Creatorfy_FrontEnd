import styles from '../../styles/button.module.css'

export default function CreatorButton({ text, type, className }) {
  console.log('type', type)
  return (
    <div className={`${styles.creatorButton} ${styles[type]} ${className}`}>
      { text }
    </div>
  )
}
