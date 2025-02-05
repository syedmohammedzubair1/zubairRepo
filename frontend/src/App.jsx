import React from "react";
import Home from "./pages/Home";
import Navbar1 from "./components/NavBar/Navbar";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Navbar1 />} />
      </Routes>
    </div>
  );
}

export default App;
