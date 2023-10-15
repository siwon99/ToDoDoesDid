import "./App.css";
import { Reset } from 'styled-reset';
import Sidebar from '../src/components/Sidebar';

import { Routes, Route } from "react-router-dom";

function App() {
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
export default App;
