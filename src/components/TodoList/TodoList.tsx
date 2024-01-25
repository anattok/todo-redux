import { FC } from "react";
import { useSelector } from "react-redux";
import s from "./TodoList.module.css";
import { RootState } from "../../store/todoSlice";
import { TodoItem } from "../TodoItem/TodoItem";

interface Todo {
  text: string;
  id?: string;
  completed?: boolean;
}

export const TodoList: FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  console.log(todos);

  return (
    <ul className={s["todo-list"]}>
      {todos.map((todo: Todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};
