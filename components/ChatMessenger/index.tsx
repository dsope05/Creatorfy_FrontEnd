import { useEffect, useState } from 'react';
import ChatNavigation from './ChatNavigation';
import Message from './Message';
import { ChatItem } from '../utils/types';
import { CREATOR } from '../utils/constants';
import styles from '../../styles/ChatMessenger.module.css';

interface ChatMessengerProps {
  myUser: any;
  chatItems: ChatItem[];
}

const ChatMessenger = ({ myUser = {}, chatItems = [] }: ChatMessengerProps) => {
  const [selectedMessageUuid, setSelectedMessageUuid] = useState<string>(
    chatItems[0].uuid
  );
  const [messagesByUuid, setMessagesByUuid] = useState<{
    [uuid: string]: ChatItem;
  }>({});

  const chattedUsers = chatItems.map(({ id, uuid, buyer, creator }) => ({
    id,
    uuid,
    chattedUser: myUser.userType === CREATOR ? buyer : creator,
  }));

  useEffect(() => {
    const chatsByUuid = {};
    for (const chatItem of chatItems) {
      const { uuid } = chatItem;
      chatsByUuid[uuid] = chatItem;
    }
    setMessagesByUuid(chatsByUuid);
  }, [chatItems]);

  console.log('messagesByUuid', messagesByUuid);

  if (!messagesByUuid[selectedMessageUuid]) {
    return <div>Error!</div>;
  }

  const { messages, buyer, creator } = messagesByUuid[selectedMessageUuid];

  return (
    <article className={styles.chatMessengerContainer}>
      <ChatNavigation
        chattedUsers={chattedUsers}
        onNavigationClick={(uuid: string) => setSelectedMessageUuid(uuid)}
      />
      <section className={styles.chatBox}>
        {messages.map(({ authorId, message, uuid }) => (
          <Message
            key={uuid}
            icon={
              buyer.id === authorId
                ? buyer.extraPublic.profile_photo
                : creator.extraPublic.profile_photo
            }
            text={message}
          />
        ))}
      </section>
    </article>
  );
};

export default ChatMessenger;
