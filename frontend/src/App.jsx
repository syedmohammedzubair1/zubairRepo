import React from "react";
import Home from "./pages/Home";
import Navbar1 from "./components/NavBar/Navbar";
import { Routes, Route } from "react-router-dom";
import DashboardLayoutBasic from './components/DashboardComponent/Employee';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Navbar1 />} />
        <Route path="/test" element={<DashboardLayoutBasic />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
