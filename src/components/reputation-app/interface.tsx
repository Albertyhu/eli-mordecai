export type FilledStarType = {
  color: string;
  width: string;
  height: string;
  cursor: string;
};

export type StarStyleType = {
  color: string;
  width: string;
  height: string;
};

export type RatingCompType = {
  rating: number;
  setRating: (c: number) => void;
};

export type StarComponentType = {
  rating: number;
  value: number;
};

export type InputStarComponentType = {
  value: number;
  hoverRating: number;
  setRating: (c: number) => void;
  setHoverRating: (c: number) => void;
};

export type UserInputType = {
  setRating: (c: number) => void;
  hoverRating: number;
  setHoverRating: (c: number) => void;
};

export type FeedbackContextType = {
  message: string;
  setMessage: (c: string) => void;
  rating: number;
  setRating: (c: number) => void;
  responseRef: any;
  values: Array<number>;
};
