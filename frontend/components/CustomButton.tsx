"use client";

import Image from "next/image";

import { CustomButtonProps } from '@/types/gonna-add-all-the-props-when-iget this project done'

const Button = ({  btnType, containerStyles, title, handleClick }: CustomButtonProps) => (
  <button
    disabled={false}
    type={btnType || "button"}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
  >
    <span className={`flex-1 `}>{title}</span>
   
  </button>
);

export default Button;