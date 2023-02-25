import React from "react";
import { Box, Typography } from "@mui/material";
import Input from "../Input/Input";
import ListTask from "../ListTask/ListTask";
import { useSelector } from "react-redux";
import { removeAccents } from "../../utils/utils";
import useStyles from "./style";

function TodoList({ title, todoList }) {
  const classes = useStyles();
  const a = useSelector((state) => state.todo.todos);
  const searchValue = useSelector((state) => state.todo.searchValue);
  const filterTodos = a.filter((todo) =>
    removeAccents(todo.name).includes(removeAccents(searchValue))
  );
  const settingImage = useSelector((state) => state.setting.image);
  const todos =
    searchValue.trim().length !== 0 ? filterTodos : todoList ? todoList : a;
  const currentTodo = useSelector((state) => state.todo.currentTodo);
  const doneTodo = todos.filter((todo) => todo.done === true);
  const notDoneTodo = todos.filter((todo) => todo.done === false);

  return (
    <Box
      className={classes.boxContainer}
      sx={{
        backgroundImage: `url(${settingImage})`,
      }}
    >
      <Typography variant="h1" className={classes.textHeading}>
        {title || "TodoList"}
      </Typography>
      <Input currentTodo={currentTodo} />
      {title ? (
        <ListTask todos={todos} />
      ) : (
        <>
          <ListTask todos={notDoneTodo} />
          <ListTask todos={doneTodo} doneTodo />
        </>
      )}
    </Box>
  );
}


export default TodoList;
