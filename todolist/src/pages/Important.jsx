import React from "react";
import { useSelector } from "react-redux";
import TodoList from "../component/TodoList/TodoList";

function Important() {
  const todos = useSelector((state) => state.todo.todos);
  const todoList = todos.filter(
    (item) => item.important === true && item.done === false
  );
  return <TodoList title={"Important"} todoList={todoList} />;
}

export default Important;
