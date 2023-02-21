import React, { useState } from "react";
import {
  ListItemIcon,
  ListItemText,
  Stack,
  List,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import ConfirmBox from "../ConfirmBox/ConfirmBox";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTodo,
  setCurrentTodo,
  startEditTodo,
  toggleDoneTodo,
} from "../../redux/todoSlice";

function ListTask({ todos, doneTodo }) {
  const [open, setOpen] = useState(false);
  // const todos = useSelector((state) => state.todo.todos);
  const currentTodo = useSelector((state) => state.todo.currentTodo);
  const dispatch = useDispatch();

  const handleDelete = (todo) => {
    dispatch(setCurrentTodo(todo));
    setOpen(true);
  };

  const handleCancel = () => {
    dispatch(setCurrentTodo(null));
    setOpen(false);
  };
  const handleConfirm = (id) => {
    dispatch(deleteTodo(id));
    dispatch(setCurrentTodo(null));
    setOpen(false);
  };
  return (
    <List>
      <Typography variant="h6" sx={{color: 'blue'}}>{doneTodo ? "Hoàn thành" : "Chưa hoàn thành"}</Typography>
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
                onClick={() => dispatch(startEditTodo(todo.id))}
                sx={{ cursor: "pointer" }}
              >
                <EditIcon />
              </ListItemIcon>
              <ListItemIcon title={doneTodo ? 'Chưa hoàn thành' : 'Hoàn thành'} sx={{ cursor: "pointer" }} onClick={() => dispatch(toggleDoneTodo(todo))}>
                {doneTodo ? <DoNotDisturbIcon /> : <CheckIcon />}
              </ListItemIcon>
            </Stack>
          </ListItemText>
        ))}
      <ConfirmBox
        open={open}
        onClose={handleCancel}
        onConfirm={() => handleConfirm(currentTodo.id)}
        title="Xác nhận xóa"
        content={`Bạn có chắc chắn muốn xóa ${
          currentTodo ? currentTodo.name : ""
        } không?`}
      />
    </List>
  );
}

export default ListTask;
