import { Container, Stack } from "@mui/material";
import React from "react";
import Sidebar from "../component/Sidebar/Sidebar";
import { Routes, Route } from 'react-router-dom'
import MyDay from "../pages/MyDay";
import Important from "../pages/Important";
import Home from "../pages/Home";
import Setting from "../pages/Setting";

function MainLayout() {
  return (
    <Container sx={{marginY: '15px'}}>
      <Stack direction={"row"} spacing={2}>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/my-day" element={<MyDay />}/>
          <Route path="/important" element={<Important />}/>
          <Route path="/setting" element={<Setting />}/>
        </Routes>
      </Stack>
    </Container>
  );
}

export default MainLayout;
