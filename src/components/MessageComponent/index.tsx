import "./style.css";

type MessageProps = {
  message: string;
  messageRef: any;
};

const MessageComponent = (props: MessageProps) => {
  const { message, messageRef } = props;

  return (
    <div
      ref={messageRef}
      className="font-primaryF bg-black border-2 border-primaryC border-solid rounded-lg text-white text-center h-fit w-11/12 sm:w-8/12 md:w-[300px] fixed top-[25%] left-[50%] translate-x-[-50%] flex justify-center transition-all duration-500 z-20 py-5 MessageFadeOut"
    >
      {message}
    </div>
  );
};

export default MessageComponent;
