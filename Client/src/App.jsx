import React, { useState } from "react";
import { Reset } from 'styled-reset';
import Sidebar from './components/Sidebar';
import { Routes, Route } from "react-router-dom";

export default function App() {

  return (
    <>
      <Reset />
      <Sidebar />

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes> */}
    </>
  );
}