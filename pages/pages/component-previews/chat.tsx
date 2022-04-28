import { useQuery } from '@apollo/client';
import ChatMessenger from '../../../components/ChatMessenger';
import { GET_CONVERSATIONS, MY_USER } from '../../../graphql/queries';
import styles from '../../../styles/PageLayout.module.css';

const chatItems = [
  {
    buyer: {
      extraPublic: {
        // profile_photo:
        //   'https://creatorfy.s3.amazonaws.com/defaults/mock_photos/creator_1.jpg',
        profile_photo: '/creatorCardImage.jpg',
      },
      handle: 'janet35',
      id: '3',
      userType: 'CREATOR',
    },
    creator: {
      extraPublic: {
        // profile_photo:
        //   'https://creatorfy.s3.amazonaws.com/defaults/mock_photos/creator_1.jpg',
        profile_photo: '/creatorCardImage.jpg',
      },
      handle: 'admin',
      id: '1',
      userType: 'CREATOR',
    },
    id: '1',
    messages: [
      {
        authorId: '3',
        createdOn: '1650469948.608866',
        message: 'i was petrified2',
        uuid: '89b8438a-dd1a-4664-851c-0b30c93d1eeb',
      },
    ],
    service: {
      title: 'Local book finish company situation benefit.',
    },
    uuid: '15ebd972-4df9-4e53-b13c-9d566bd1642a',
  },
];

const Chat = () => {
  const {
    loading: isMyUserQueryLoading,
    error: myUserError,
    data: myUserData,
  } = useQuery(MY_USER);
  const {
    loading: isGetConversationsLoading,
    error: getConversationsError,
    // data: getConversationsData,
  } = useQuery(GET_CONVERSATIONS);

  if (isMyUserQueryLoading || isGetConversationsLoading) {
    return (
      <div className={styles.container}>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (myUserError || getConversationsError) {
    return (
      <div className={styles.container}>
        <h1>Error</h1>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <ChatMessenger
        myUser={myUserData.myUser.item}
        chatItems={chatItems}
        // chatItems={getConversationsData.getConversations.items}
      />
    </div>
  );
};

export default Chat;
