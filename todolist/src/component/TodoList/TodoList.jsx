import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Input from "../Input/Input";
import ListTask from "../ListTask/ListTask";
import { useSelector } from "react-redux";

function TodoList() {
  const classes = useStyles();
  const todos = useSelector((state) => state.todo.todos);
  console.log("TodoList ~ todos:", todos)
  const currentTodo = useSelector((state) => state.todo.currentTodo);
  const doneTodo = todos.filter((todo) => todo.done === true)
  const notDoneTodo = todos.filter((todo) => todo.done === false)
  // console.log("TodoList ~ doneTodo:", doneTodo)
  

  return (
    <Container maxWidth="md">
      <Box className={classes.boxContainer}>
        <Typography variant="h1" className={classes.textHeading}>
          TodoList
        </Typography>
        <Input currentTodo={currentTodo} />
        <ListTask todos={notDoneTodo} />
        <ListTask todos={doneTodo} doneTodo/>
      </Box>
    </Container>
  );
}
const useStyles = makeStyles({
  boxContainer: {
    border: "1px solid #eee",
    padding: "15px 20px",
    borderRadius: "15px",
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
