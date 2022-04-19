import IconButton from './IconButton'
import { useIsMobileOrTablet } from '../utils/hooks';

interface ShareButtonProps {
  title: string;
  text: string;
  url: string;
}

const ShareButton = ({ title, text, url }: ShareButtonProps) => {
  const { isMobile, isAppleHandheld } = useIsMobileOrTablet();

  const handleMobileClick = () => {
    if (!navigator.share) {
      console.log('Share is not supported on this browser.');
      return;
    }

    navigator.share({
      title,
      text,
      url,
    });
  };

  const handleDesktopClick = () => {
    alert('Open desktop share modal?');
  };

  return (
    <IconButton
      onClick={(isMobile || isAppleHandheld) ? handleMobileClick : handleDesktopClick}
      ariaLabel="share"
      imageAlt="share icon"
      imageSrc="/share.svg"
      isPink
    />
  );
};

export default ShareButton;;
