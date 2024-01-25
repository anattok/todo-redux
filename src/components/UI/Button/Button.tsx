import { FC, HTMLProps } from "react";
import s from "./Button.module.css";
import cn from "classnames";

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  className: string;
  children: string;
  handleSubmit?: () => void;
}

export const Button: FC<ButtonProps> = ({
  className,
  children,
  handleSubmit,
}) => {
  return (
    <button className={cn(s["button"], className)} onClick={handleSubmit}>
      {children}
    </button>
  );
};
