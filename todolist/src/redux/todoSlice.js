import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  todos: [],
  currentTodo: null,
  searchValue: "",
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
        createdAt: new Date().toISOString(),
        important: false,
      };
      state.todos.push(todo);
    },
    deleteTodo: (state, action) => {
      const newTodos = state.todos.filter((item) => item.id !== action.payload);
      state.todos = newTodos
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
    setImportantTodo: (state, action) => {
      const todoId = action.payload;
      state.todos.some((todo, index) => {
        if (todo.id === todoId) {
          state.todos[index].important = !state.todos[index].important;
          return true;
        }
        return false;
      });
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    addImportTodo: (state, action) => {
      const todo = {
        name: action.payload,
        id: uuidv4(),
        done: false,
        createdAt: new Date().toISOString(),
        important: true,
      };
      state.todos.push(todo);
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
  setImportantTodo,
  setSearchValue,
} = todoSlice.actions;
export default todoSlice.reducer;
