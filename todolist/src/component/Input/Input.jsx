import { TextField } from "@mui/material";
import React, { useState } from "react";

function Input({ addTodo, currentTodo, finishTodo, editTodo }) {
  const [name, setName] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentTodo) {
      finishTodo();
    } else {
      addTodo(name);
    }
    setName("");
  };
  const handleChangeValue = (e) => {
    if (currentTodo) {
      editTodo(e.target.value);
    } else {
      setName(e.target.value);
    }
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
        value={currentTodo ? currentTodo.name : name}
        onChange={handleChangeValue}
      />
    </form>
  );
}

export default Input;
