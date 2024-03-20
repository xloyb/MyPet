import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  containerStyles?: string;
  title: string;
  handleClick?:
   MouseEventHandler<HTMLButtonElement>;
   btnType?: "button" | "submit";

}
