import { FC } from "react";
import s from "./TodoItem.module.css";
import { Button } from "../UI/Button/Button";

interface Todo {
  text: string;
  id?: string;
  completed?: boolean;
}

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  return (
    <li className={s["todo-item"]}>
      <span>{todo.text}</span>
      <Button className={s["button"]}>&times;</Button>
    </li>
  );
};
