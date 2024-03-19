"use client";

import Image from "next/image";

import { CustomButtonProps } from '@/types'

const Button = ({  containerStyles, title, handleClick }: CustomButtonProps) => (
  <button
    disabled={false}
    type={"button"}
    className={`custom-btn `}
    onClick={handleClick}
  >
    <span className={`flex-1 `}>{title}</span>
    
      title
   
  </button>
);

export default Button;