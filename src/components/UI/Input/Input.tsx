import { FC, HTMLProps } from "react";

import s from "./Input.module.css";
import cn from "classnames";

interface InputProps extends HTMLProps<HTMLInputElement> {
  className: string;
  handleInput: (text: string) => void;
  text: string;
}

export const Input: FC<InputProps> = ({
  className,
  handleInput,
  text,
  ...rest
}) => {
  return (
    <input
      value={text}
      type="text"
      className={cn(s["todo-input"], className)}
      {...rest}
      onChange={(e) => handleInput(e.target.value)}
    />
  );
};
