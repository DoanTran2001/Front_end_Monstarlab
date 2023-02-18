import React, { useEffect, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { v4 as uuidv4 } from "uuid";
import Input from "../Input/Input";
import ListTask from "../ListTask/ListTask";

function TodoList() {
  const classes = useStyles();
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState(null);

  useEffect(() => {
    const todosString = localStorage.getItem("todo");
    // console.log(todosString);
    const todoList = JSON.parse(todosString || "[]");
    // console.log(todoList);
    setTodos(todoList);
  }, []);

  const addTodo = (name) => {
    if (name.trim() === "") {
      return;
    }
    const todo = {
      name,
      id: uuidv4(),
    };
    setTodos((prev) => [...prev, todo]);
    const todosString = localStorage.getItem("todo");
    const todoList = JSON.parse(todosString || "[]");
    const newTodos = [...todoList, todo];
    localStorage.setItem("todo", JSON.stringify(newTodos));
  };

  const startEditTodo = (id) => {
    const findTodo = todos.find((todo) => todo.id === id);
    if (findTodo) {
      setCurrentTodo(findTodo);
    }
  };
  // Change edit todo
  const editTodo = (name) => {
    setCurrentTodo((prev) => ({ ...prev, name }));
  };
  // submit todo input
  const finishTodo = () => {
    const result = todos.map((todo) => {
      if (todo.id === currentTodo.id) {
        return currentTodo;
      }
      return todo;
    });
    setTodos(result);
    const newTodos = [...result];
    localStorage.setItem("todo", JSON.stringify(newTodos));
    setCurrentTodo(null);
  };
  // Delete a todo
  const deleteTodo = (id) => {
    const findIndexTodo = todos.findIndex((todo) => todo.id === id);
    if (findIndexTodo !== -1) {
      const results = [...todos];
      results.splice(findIndexTodo, 1);
      setTodos(results);
      const newTodos = [...results];
      localStorage.setItem("todo", JSON.stringify(newTodos));
    }
  };
  return (
    <Container maxWidth="md">
      <Box className={classes.boxContainer}>
        <Typography variant="h1" className={classes.textHeading}>
          TodoList
        </Typography>
        <Input
          addTodo={addTodo}
          editTodo={editTodo}
          currentTodo={currentTodo}
          finishTodo={finishTodo}
        />
        <ListTask
          todos={todos}
          deleteTodo={deleteTodo}
          startEditTodo={startEditTodo}
          currentTodo={currentTodo}
          setCurrentTodo={setCurrentTodo}
        />
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
