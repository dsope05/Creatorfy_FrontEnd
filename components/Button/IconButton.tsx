import Image from 'next/image';
import styles from '../../styles/IconButton.module.css';

interface IconButtonProps {
  onClick: () => void;
  ariaLabel: string;
  imageAlt: string;
  imageSrc: string;
  buttonClass?: string;
  imageClass?: string;
  width?: string;
  height?: string;
  isPink?: boolean;
}

const IconButton = ({
  onClick,
  ariaLabel,
  imageAlt,
  imageSrc,
  buttonClass = styles.button,
  imageClass,
  width = '20',
  height = '20',
  isPink,
}: IconButtonProps) => (
  <button onClick={onClick} className={buttonClass} aria-label={ariaLabel}>
    <Image
      className={imageClass ? imageClass : isPink ? styles.pinkIcon : ''}
      aria-hidden
      alt={imageAlt}
      src={imageSrc}
      width={width}
      height={height}
    />
  </button>
);

export default IconButton;
