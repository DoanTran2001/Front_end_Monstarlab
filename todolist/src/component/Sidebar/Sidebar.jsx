import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  TextField,
} from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue } from "../../redux/todoSlice";

function Sidebar() {
  const theme = useSelector((state) => state.setting.theme);
  const dispatch = useDispatch()
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
    dispatch(setSearchValue(e.target.value))
  };
  return (
    <Box
      sx={{
        width: "40%",
        minHeight: "100vh",
        border: "1px solid #eee",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        overflow: "hidden",
        flexShrink: "0",
        background: theme,
      }}
    >
      <List>
        <TextField value={search} onChange={handleChange} placeholder="Search todo"/>
        <ListItem>
          <ListItemButton component={NavLink} to="/">
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton component={NavLink} to="/my-day">
            <ListItemText primary="My Day" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton component={NavLink} to="/important">
            <ListItemText primary="Important" />
          </ListItemButton>
        </ListItem>
      </List>
      <Button>
        <Link to={"/setting"}>Setting</Link>
      </Button>
    </Box>
  );
}

export default Sidebar;
