import { useState, useContext } from "react";
import { BsStar, BsStarFill } from "react-icons/bs";
import { FeedbackContext } from "./context";
import uuid from "react-uuid";
import type {
  FilledStarType,
  StarStyleType,
  StarComponentType,
  InputStarComponentType,
  UserInputType,
} from "./interface";

const StarDimensions = "50px";

const FilledStarStyle: FilledStarType = {
  color: "#DECB17",
  width: StarDimensions,
  height: StarDimensions,
  cursor: "pointer",
};

const StarStyle: StarStyleType = {
  color: "#DECB17",
  width: StarDimensions,
  height: StarDimensions,
};

const emotion = [
  "Very Dissatisfied",
  "Dissatisfied",
  "Average",
  "Satisfied",
  "Very Satisfied!",
];

export const RatingComponent = () => {
  const { rating, setRating } = useContext(FeedbackContext);
  const [hoverRating, setHoverRating] = useState<number>(0);

  return (
    <div className="mx-auto w-fit h-auto group my-10">
      <RenderedRating />
      <UserInput
        setRating={setRating}
        hoverRating={hoverRating}
        setHoverRating={setHoverRating}
      />
    </div>
  );
};

/* ID is used to identify the value of each star */
export const StarComponent = (props: StarComponentType) => {
  const { rating, value } = props;
  return (
    <div className="">
      {value <= rating ? (
        <BsStarFill style={FilledStarStyle} />
      ) : (
        <BsStar style={StarStyle} />
      )}
    </div>
  );
};

const InputStarComponent = (props: InputStarComponentType) => {
  const { value, hoverRating, setRating, setHoverRating } = props;
  const { setRatingError } = useContext(FeedbackContext);
  const handleHoverEvent = () => {
    setHoverRating(value);
  };

  const clickEvent = () => {
    setHoverRating(value);
    setRating(value);
    setRatingError(null);
  };

  return (
    <div className="" onMouseEnter={handleHoverEvent} onMouseDown={clickEvent}>
      {value <= hoverRating ? (
        <BsStarFill style={FilledStarStyle} />
      ) : (
        <BsStar style={StarStyle} />
      )}
    </div>
  );
};

export const RenderedRating = () => {
  const { rating } = useContext(FeedbackContext);
  const values: Array<number> = [1, 2, 3, 4, 5];
  return (
    <div className="grid group-hover:hidden">
      <div className="min-h-[50px]">
        {rating > 0 && (
          <p className="text-center text-3xl">{emotion[rating - 1]}</p>
        )}
      </div>
      <div className="flex flex-row">
        {values.map((value, index) => (
          <StarComponent rating={rating} value={value} key={uuid()} />
        ))}
      </div>
    </div>
  );
};

const UserInput = (props: UserInputType) => {
  const { setRating, hoverRating, setHoverRating } = props;
  const values: Array<number> = [1, 2, 3, 4, 5];
  return (
    <div className="hidden group-hover:grid">
      <div className="min-h-[50px]">
        {hoverRating > 0 && (
          <p className="text-center text-3xl">{emotion[hoverRating - 1]}</p>
        )}
      </div>
      <div className="flex flex-row">
        {values.map((value, index) => (
          <InputStarComponent
            value={value}
            hoverRating={hoverRating}
            setRating={setRating}
            setHoverRating={setHoverRating}
            key={uuid()}
          />
        ))}
      </div>
    </div>
  );
};
