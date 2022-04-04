import Image from 'next/image';

interface IconButtonProps {
  onClick: () => void;
  ariaLabel: string;
  imageAlt: string;
  imageSrc: string;
  buttonClass?: string;
  imageClass?: string;
  width?: string;
  height?: string;
}

const IconButton = ({
  onClick,
  ariaLabel,
  imageAlt,
  imageSrc,
  buttonClass,
  imageClass,
  width = '20',
  height = '20',
}: IconButtonProps) => (
  <button onClick={onClick} className={buttonClass} aria-label={ariaLabel}>
    <Image
      className={imageClass}
      aria-hidden
      alt={imageAlt}
      src={imageSrc}
      width={width}
      height={height}
    />
  </button>
);

export default IconButton;
