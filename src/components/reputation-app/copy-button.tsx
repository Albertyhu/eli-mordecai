import CopyIcon from "./copy.png";
import BlackCopyIcon from "./copy-black.png";
import { useContext } from "react";
import { FeedbackContext } from "./context";
const CopyButton = (props: { CopiedMessageRef: any }) => {
  const { message } = useContext(FeedbackContext);
  const { CopiedMessageRef } = props;
  const IconSize = 25;
  var cancel: any = null;
  const ClickEvent = () => {
    navigator.clipboard.writeText(message);
    CopiedMessageRef.current.classList.remove("MessageFadeOut");
    clearTimeout(cancel);
    cancel = setTimeout(() => {
      CopiedMessageRef.current.classList.add("MessageFadeOut");
    }, 2000);
  };
  return (
    <button
      className="flex flex-row flex-nowrap duration-500 mx-auto py-[20px] px-[30px] text-[18px] min-[480px]:px-[50px] min-[480px]:text-[20px] md:py-[24px] md:px-[110px] md:text-[22px] cursor-pointer rounded-[0px] no-underline inline-block border-[1px] border-solid border-white hover:bg-primaryC hover:text-secondaryC text-center my-[10px] font-secondaryF font-[500] transition-all bg-secondaryC text-white group"
      onClick={ClickEvent}
    >
      <span>Copy</span>
      <div className="relative w-[25px] h-[25px]">
        <img
          alt="copy icon"
          src={CopyIcon.src}
          width={IconSize}
          height={IconSize}
          className="opacity-100 group-hover:opacity-0 absolute inset-0 transition-all duration-500"
        />
        <img
          alt="gold copy icon"
          src={BlackCopyIcon.src}
          width={IconSize}
          height={IconSize}
          className="opacity-0 group-hover:opacity-100 absolute inset-0 transition-all duration-500"
        />
      </div>
    </button>
  );
};

export default CopyButton;
