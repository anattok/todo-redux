import { createSlice } from "@reduxjs/toolkit";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

interface TodosState {
  todos: Todo[];
}

const initialState: TodosState = {
  todos: [],
};

export const todoSlice = createSlice({
  //название слайса
  name: "todos",
  //начальное состояние
  initialState,
  //набор методов которые как-то влияют на изменение стейта
  reducers: {
    //каждый из методов принимает текущий стор - "state" и информацию об экшене
    addTodo(state, action) {
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        completed: false,
      });
    },
    deleteTodo() {},
    toggleTodo() {},
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
export type RootState = ReturnType<typeof todoSlice.reducer>;
