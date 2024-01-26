import { FC, useState } from "react";
import s from "./TodoItem.module.css";
import { Button } from "../UI/Button/Button";
import { useDispatch } from "react-redux";

import { deleteTodo } from "../../store/todoSlice";
import { Checkbox } from "../UI/Checkbox/Checkbox";

interface Todo {
  text: string;
  id?: string;
  completed?: boolean;
}

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  const [isChecked, setIsChecked] = useState(todo.completed || false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Инвертируем значение isChecked при изменении флажка
  };

  const dispatch = useDispatch();
  const deleteTask = () => {
    dispatch(deleteTodo({ id: todo.id }));
  };
  return (
    <li className={s["todo-item"]}>
      <Checkbox
        checked={isChecked}
        onChange={handleCheckboxChange}
        className={s["checkbox"]}
      />
      <span className={s["text"]}>{todo.text}</span>
      <Button handleSubmit={deleteTask} className={s["button"]}>
        &times;
      </Button>
    </li>
  );
};
