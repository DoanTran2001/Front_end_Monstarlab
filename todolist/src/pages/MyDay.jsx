import React from "react";
import { useSelector } from "react-redux";
import TodoList from "../component/TodoList/TodoList";
import { filterDate } from "../utils/utils";

function MyDay() {
  const todos = useSelector((state) => state.todo.todos);
  const arr = todos.filter((item) => {
    const dateItem = new Date(item.createdAt);
    if (filterDate(dateItem) && item.done === false) return item;
  });
  return (
    <>
      <TodoList title="My Day" todoList={arr}/>
    </>
  );
}

export default MyDay;
