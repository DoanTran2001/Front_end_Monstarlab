import React from "react";
import { useSelector } from "react-redux";
import TodoList from "../component/TodoList/TodoList";
import { compareDate } from "../utils/utils";

function MyDay() {
  const todos = useSelector((state) => state.todo.todos);
  const myDayTodo = todos.filter((item) => {
    const dateItem = new Date(item.createdAt);
    return compareDate(dateItem) && item.done === false;
  });
  return <TodoList title="My Day" todoList={myDayTodo} />;
}

export default MyDay;
