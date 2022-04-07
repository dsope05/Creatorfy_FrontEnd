import styles from '../../styles/button.module.css'

interface CreatorButtonProps {
  text: string;
  type: string;
  className?: string;
  size?: string;
  onClick: Function;
}
export default function CreatorButton({ onClick, text, type, className, size }: CreatorButtonProps) {
  return (
    <div onClick={() => onClick()} className={`${styles.creatorButton} ${styles[type]} ${className} ${size === 'large' ? styles.creatorButtonLarge : ''}`}>
      { text }
    </div>
  )
}
