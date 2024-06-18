import { useContext, useRef } from "react";
import { FeedbackContext } from "./context.tsx";
import { StarComponent } from "./rating-component.tsx";
import CopyButton from "./copy-button.tsx";
import type {} from "./interface.tsx";
import CopyIcon from "./copy.png";
import MessageComponent from "../MessageComponent/index.tsx";
import uuid from "react-uuid";
import { BusinessInfo } from "@/data/business-info.js";
const ResponseElement = () => {
  const { rating, responseRef } = useContext(FeedbackContext);
  return (
    <div id="Response" ref={responseRef} className="hidden">
      {rating > 3 && BusinessInfo.Google_review_url ? (
        <GoogleReviewRequest />
      ) : (
        <BadRatingResponse />
      )}
    </div>
  );
};

const GoogleReviewRequest = () => {
  const CopiedMessageRef = useRef(null);
  const { message, rating, values } = useContext(FeedbackContext);
  return (
    <div className="my-10 [&>p]:leading-[25px] [&>p]:text-center [&>p]:my-5">
      <MessageComponent
        message="Your feedback has been copied."
        messageRef={CopiedMessageRef}
      />
      <h2 className="text-3xl font-primaryF text-center my-10">
        Awesome! Thank you for the {rating}-star rating!
      </h2>
      <div className="flex flex-row mx-auto justify-center">
        {values.map((value: number, index: number) => (
          <StarComponent rating={rating} value={value} key={uuid()} />
        ))}
      </div>
      <div className="my-10 bg-slate-700 rounded-lg p-5">{message}</div>
      <CopyButton CopiedMessageRef={CopiedMessageRef} />
      <p>
        <span className="text-primaryC font-bold">We need your help. </span>
        Please, share your positive review on my Google Reviews Page.
      </p>
      <a href={BusinessInfo.Google_review_url} target="_blank">
        <div className="mx-auto text-center mt-[60px]">
          <input
            type="button"
            className="duration-500 py-[20px] px-[30px] text-[18px] min-[480px]:px-[50px] min-[480px]:text-[20px] md:py-[24px] md:px-[110px] md:text-[22px] cursor-pointer rounded-[0px] no-underline inline-block border-[1px] border-solid border-primaryC bg-primaryC text-secondaryC text-center my-[10px] mr-[10px] font-secondaryF font-[500] transition-all hover:bg-secondaryC hover:text-primaryC"
            value="Post feedback on Google"
          />
        </div>
      </a>
    </div>
  );
};

const BadRatingResponse = () => {
  return (
    <div className="text-white text-center my-10">
      <p>Thank you for your feedback.</p>
      <a href="/" className="mx-auto text-center mt-[60px]">
        <input
          type="button"
          data-wait="Please wait..."
          className="duration-500 py-[20px] px-[30px] text-[18px] min-[480px]:px-[50px] min-[480px]:text-[20px] md:py-[24px] md:px-[110px] md:text-[22px] cursor-pointer rounded-[0px] no-underline inline-block border-[1px] border-solid border-primaryC bg-primaryC text-secondaryC text-center my-[10px] mr-[10px] font-secondaryF font-[500] transition-all hover:bg-secondaryC hover:text-primaryC"
          value="Go Home"
        />
      </a>
    </div>
  );
};

export default ResponseElement;
