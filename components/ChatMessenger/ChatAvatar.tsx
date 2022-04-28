import Image from 'next/image';
import styles from '../../styles/ChatNavigation.module.css';

interface ChatAvatarProps {
  icon: string;
}

const ChatAvatar = ({ icon }: ChatAvatarProps) => (
  <Image
    className={icon ? styles.chatAvatar : styles.defaultChatAvatar}
    aria-hidden
    alt={icon}
    src={icon}
    width="30"
    height="30"
  />
);

export default ChatAvatar;
