import React from "react";
import Home from "./pages/Home";
import Navbar1 from "./components/NavBar/Navbar";
import { Routes, Route } from "react-router-dom";
// import Login from "./pages/Login";
import Login1 from "./pages/Login2step";
import DashboardLayoutBasic from "./components/DashboardComponent/Employee";
import Footer from "./components/Footer/Footer"; // Import Footer
import Home1 from "./pages/Home1";
function App() {
  return (
    <div className="app">
      <Navbar1 />
      <Routes>
        {/* <Route path="/" element={<Navbar1 />} /> */}
        <Route path="/test" element={<DashboardLayoutBasic />} />
        <Route path="/home" element={<Home1 />} />
        {/* <Route path="/login"element={<Login/>} /> */}
        <Route path="/login1" element={<Login1 />} />
        <Route path="/home1" element={<Home1 />} />
      </Routes>
      <Home1 />
      <Footer />
    </div>
  );
}

export default App;
