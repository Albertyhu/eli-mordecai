import React, {
  useState,
  useEffect,
  useRef,
  type ReactHTMLElement,
} from "react";
import ResponseComponent from "./response.tsx";
import emailjs from "@emailjs/browser";
import { RatingComponent } from "./rating-component";
import { FeedbackContext } from "./context.tsx";

const PUBLIC_KEY = import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY;
const TEMPLATE_KEY = import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID;
const SERVICE_ID = import.meta.env.PUBLIC_EMAILJS_SERVICE_ID;

const testMess =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

const ReviewForm = () => {
  const [message, setMessage] = useState<string>("");
  const [rating, setRating] = useState<number>(0);

  const formRef = useRef<HTMLFormElement>(null);
  const responseRef = useRef<HTMLDivElement>(null);
  const handleMessage = (evt: any) => {
    setMessage(evt.target.value);
  };

  const submitEvent = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    formRef?.current?.classList.add("hidden");
    responseRef?.current?.classList.remove("hidden");
    responseRef?.current?.classList.add("block");
  };
  const context = {
    message,
    setMessage,
    rating,
    setRating,
    responseRef,
    values: [1, 2, 3, 4, 5],
  };

  return (
    <FeedbackContext.Provider value={context}>
      <form ref={formRef} onSubmit={submitEvent}>
        <RatingComponent />
        <textarea
          onChange={handleMessage}
          className="input-field text-area w-input resize-none bg-slate-700 rounded-lg px-5"
          name="Your-Message"
          data-name="Your Message"
          rows={5}
          placeholder="Can you share your feedback about your experience with me? Share your feedback here."
          id="Your-Message"
          value={message}
        ></textarea>
        <div className="mx-auto text-center mt-[60px]">
          <input
            type="submit"
            data-wait="Please wait..."
            className="duration-500 py-[20px] px-[30px] text-[18px] min-[480px]:px-[50px] min-[480px]:text-[20px] md:py-[24px] md:px-[110px] md:text-[22px] cursor-pointer rounded-[0px] no-underline inline-block border-[1px] border-solid border-primaryC bg-primaryC text-secondaryC text-center my-[10px] mr-[10px] font-secondaryF font-[500] transition-all hover:bg-secondaryC hover:text-primaryC"
            value="Send Message"
          />
        </div>
      </form>
      <ResponseComponent />
    </FeedbackContext.Provider>
  );
};

export default ReviewForm;
