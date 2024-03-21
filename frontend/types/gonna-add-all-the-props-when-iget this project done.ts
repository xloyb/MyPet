import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  containerStyles?: string;
  title?: string;
  handleClick?:
   MouseEventHandler<HTMLButtonElement>;
   btnType?: "button" | "submit";

}

export interface SearchBreedsProps{
  MenuBreeds?: String;
  setMenuBreeds?: (MenuBreeds: String) => void;
}
