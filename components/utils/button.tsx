import styles from '../../styles/button.module.css'

interface CreatorButtonProps {
  text: string;
  type: string;
  className?: string;
}
export default function CreatorButton({ text, type, className }: CreatorButtonProps) {
  return (
    <div className={`${styles.creatorButton} ${styles[type]} ${className}`}>
      { text }
    </div>
  )
}
