import ChatAvatar from '../ChatAvatar';
import ChatMessage from './Chat';
import UploadMessage from './Upload';

interface ChatMessageProps {
  icon: string;
  text?: string;
  upload?: string;
}

const Message = ({ icon, text, upload }: ChatMessageProps) => {
  return (
    <div>
      <ChatAvatar icon={icon} />
      {text ? <ChatMessage text={text} /> : <UploadMessage upload={upload} />}
    </div>
  );
};

export default Message;
