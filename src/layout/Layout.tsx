import { FC, useState } from "react";
import s from "./Layout.module.css";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";
import { Input } from "../components/UI/Input/Input";
import { Button } from "../components/UI/Button/Button";
import { TodoList } from "../components/TodoList/TodoList";

export const Layout: FC = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({ text }));
    setText("");
  };

  return (
    <div className={s["layout"]}>
      <div className={s["row"]}>
        <Input
          placeholder={"add todos"}
          className={s["input"]}
          handleInput={setText}
          text={text}
        />
        <Button handleSubmit={addTask} className={s["button"]}>
          Send
        </Button>
      </div>
      <TodoList />
    </div>
  );
};
