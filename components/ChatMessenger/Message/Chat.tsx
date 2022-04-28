interface ChatMessageProps {
  text: string;
}

const ChatMessage = ({ text }: ChatMessageProps) => {
  return <span>{text}</span>;
};

export default ChatMessage;
