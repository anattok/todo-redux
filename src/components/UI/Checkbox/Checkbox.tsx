import { FC, HTMLProps } from "react";

import s from "./Checkbox.module.css";
import cn from "classnames";

interface InputProps extends HTMLProps<HTMLInputElement> {
  className?: string;
  checked: boolean;
}

export const Checkbox: FC<InputProps> = ({ className, checked, ...rest }) => {
  return (
    <input
      checked={checked}
      type="checkbox"
      className={cn(s["todo-input"], className)}
      {...rest}
    />
  );
};
