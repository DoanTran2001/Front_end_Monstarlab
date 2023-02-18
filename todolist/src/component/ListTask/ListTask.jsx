import React, { useState } from "react";
import { ListItemIcon, ListItemText, Stack, List } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ConfirmBox from "../ConfirmBox/ConfirmBox";

function ListTask({
  todos,
  deleteTodo,
  startEditTodo,
  currentTodo,
  setCurrentTodo,
}) {
  const [open, setOpen] = useState(false);
  const handleDelete = (todo) => {
    setCurrentTodo(todo);
    setOpen(true);
  };

  const handleCancel = () => {
    setCurrentTodo(null);
    setOpen(false);
  };
  const handleConfirm = (id) => {
    deleteTodo(id);
    setCurrentTodo(null);
    setOpen(false);
  };
  return (
    <List>
      {todos.length > 0 &&
        todos.map((todo) => (
          <ListItemText key={todo.id}>
            <Stack direction="row">
              <ListItemText primary={todo.name} />
              <ListItemIcon
                onClick={() => handleDelete(todo)}
                sx={{ cursor: "pointer" }}
              >
                <DeleteIcon />
              </ListItemIcon>

              <ListItemIcon
                onClick={() => startEditTodo(todo.id)}
                sx={{ cursor: "pointer" }}
              >
                <EditIcon />
              </ListItemIcon>
            </Stack>
          </ListItemText>
        ))}
      <ConfirmBox
        open={open}
        onClose={handleCancel}
        onConfirm={() => handleConfirm(currentTodo.id)}
        title="Xác nhận xóa"
        content={`Bạn có chắc chắn muốn xóa ${currentTodo ? currentTodo.name : ''} không?`}
      />
    </List>
  );
}

export default ListTask;
