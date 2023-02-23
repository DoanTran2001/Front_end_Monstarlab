import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, finishEditTodo } from '../../redux/todoSlice'

function Input({currentTodo}) {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    setName(currentTodo?.name || '')
  }, [currentTodo])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentTodo) {
      dispatch(finishEditTodo({
        id: currentTodo.id,
        name,
        done: currentTodo.done,
        createdAt: currentTodo.createdAt,
        important: currentTodo.important
      }))
    } else {
      dispatch(addTodo(name))
    }
    setName("");
  };
  const handleChangeValue = (e) => {
    setName(e.target.value)
  };
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <TextField
        id="standard-basic"
        label="Todo"
        InputLabelProps={{
          style: { color: "green" },
        }}
        sx={{
          ".css-x2l1vy-MuiInputBase-root-MuiOutlinedInput-root": {
            color: "gray",
          },
        }}
        InputProps={{
          sx: {
            ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
              border: "2px solid green",
            },
            "&:hover": {
              ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                border: "2px solid green",
              },
            },
          },
        }}
        size="medium"
        variant="outlined"
        fullWidth
        value={name}
        onChange={handleChangeValue}
      />
    </form>
  );
}

export default Input;
