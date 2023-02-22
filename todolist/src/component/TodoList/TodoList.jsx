import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Input from "../Input/Input";
import ListTask from "../ListTask/ListTask";
import { useSelector } from "react-redux";

function TodoList({ title, todoList }) {
  const classes = useStyles();
  const a = useSelector((state) => state.todo.todos);
  const settingImage = useSelector((state) => state.setting.image)
  const todos = todoList ? todoList : a;
  const currentTodo = useSelector((state) => state.todo.currentTodo);
  const doneTodo = todos.filter((todo) => todo.done === true);
  const notDoneTodo = todos.filter((todo) => todo.done === false);

  return (
    <Box className={classes.boxContainer} sx={{
      backgroundImage: `url(${settingImage})`
    }}>
      <Typography variant="h1" className={classes.textHeading}>
        {title || "TodoList"}
      </Typography>
      <Input currentTodo={currentTodo} />
      {title ? (
        <>
          <ListTask todos={todos} />
        </>
      ) : (
        <>
          <ListTask todos={notDoneTodo} />
          <ListTask todos={doneTodo} doneTodo />
        </>
      )}
    </Box>
  );
}
const useStyles = makeStyles({
  boxContainer: {
    border: "1px solid #eee",
    padding: "15px 20px",
    borderRadius: "15px",
    width: "60%",
    
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover'
  },
  textHeading: {
    fontSize: "45px",
    background: "-webkit-linear-gradient(#06649B, #01E397)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    textAlign: "center",
    fontWeight: "bold",
  },
});
export default TodoList;
