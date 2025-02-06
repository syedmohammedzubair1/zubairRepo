import React from "react";
import Home from "./pages/Home";
import Navbar1 from "./components/NavBar/Navbar";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Login1 from "./pages/Login2step";
import DashboardLayoutBasic from './components/DashboardComponent/Employee';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Navbar1 />} />
        <Route path="/test" element={<DashboardLayoutBasic />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/login"element={<Login/>} /> */}
        <Route path="/login1"element={<Login1/>} />
        
      </Routes>
    </div>
  );
}

export default App;
