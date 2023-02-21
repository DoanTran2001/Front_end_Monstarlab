import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  todos: [],
  currentTodo: null,
};
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        name: action.payload,
        id: uuidv4(),
        done: false,
      };
      state.todos.push(todo);
    },
    deleteTodo: (state, action) => {
      const findIndexTodo = state.todos.findIndex(
        (todo) => todo.id === action.payload
      );
      if (findIndexTodo !== -1) {
        state.todos.splice(findIndexTodo, 1);
      }
    },
    startEditTodo: (state, action) => {
      const findTodo = state.todos.find((todo) => todo.id === action.payload);
      if (findTodo) {
        state.currentTodo = findTodo;
      }
    },
    setCurrentTodo: (state, action) => {
      state.currentTodo = action.payload;
    },
    finishEditTodo: (state, action) => {
      const todoId = action.payload.id;
      state.todos.some((todo, index) => {
        if (todo.id === todoId) {
          state.todos[index] = action.payload;
          return true;
        }
        return false;
      });
      state.currentTodo = null;
    },
    toggleDoneTodo: (state, action) => {
      const todoId = action.payload.id;
      state.todos.some((todo, index) => {
        if (todo.id === todoId) {
          let status = !state.todos[index].done;
          state.todos[index].done = status;
          if (state.currentTodo !== null) {
            state.currentTodo.done = status;
          }
          return true;
        }
        return false;
      });
    },
  },
});
export const {
  addTodo,
  deleteTodo,
  startEditTodo,
  finishEditTodo,
  setCurrentTodo,
  toggleDoneTodo,
} = todoSlice.actions;
export default todoSlice.reducer;
