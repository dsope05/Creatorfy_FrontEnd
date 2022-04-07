import styles from '../../styles/utils.module.css'

interface CreatorInputProps {
  placeholder: string;
}
export default function CreatorInput({ placeholder }: CreatorInputProps) {
  return (
    <input type="text" placeholder={placeholder} className={`${styles.creatorInput}`}>
    </input>
  )
}