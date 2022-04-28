import ChatAvatar from './ChatAvatar';
import { ChattedUser } from '../utils/types';
import { CREATOR } from '../utils/constants';
import styles from '../../styles/ChatNavigation.module.css';

interface ChatNavigationButtonProps {
  icon: string;
  text: string;
  onClick: () => void;
}

interface ChatNavigationProps {
  chattedUsers: ChattedUser[];
  onNavigationClick: (uuid: string) => void;
}

const ChatNavigationButton = ({
  icon,
  text,
  onClick,
}: ChatNavigationButtonProps) => (
  <button
    onClick={onClick}
    className={styles.chatNavigationButton}
    aria-label={text}
  >
    <ChatAvatar icon={icon} />
    <span>{text}</span>
  </button>
);

const ChatNavigation = ({
  chattedUsers,
  onNavigationClick,
}: ChatNavigationProps) => {
  console.log('chattedUsers', chattedUsers);
  return (
    <section className={styles.chatNavigationContainer}>
      {chattedUsers.map(({ uuid, chattedUser }) => {
        const { extraPublic, handle, id, userType } = chattedUser;
        return (
          <ChatNavigationButton
            key={id}
            icon={extraPublic.profile_photo}
            text={userType === CREATOR ? handle : handle}
            onClick={() => onNavigationClick(uuid)}
          />
        );
      })}
    </section>
  );
};

export default ChatNavigation;
