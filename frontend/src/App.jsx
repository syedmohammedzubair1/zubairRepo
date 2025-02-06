import React from "react";
import Home from "./pages/Home";
import Navbar1 from "./components/NavBar/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from "./pages/Login";
import Login1 from "./pages/Login2step";
import DashboardLayoutBasic from "./components/DashboardComponent/Employee";
import Footer from "./components/Footer/Footer"; // Import Footer
import Home1 from "./pages/Home1";
import Login from "./pages/Login.jsx";
import {EmployeeListPage} from "./pages/getEmployees.jsx";
import {EmployeeContextProvider} from "./context/EmployeesContext";
function App() {
  return (
    <div className="app">
      <Navbar1 />
      <EmployeeContextProvider>
      <Routes>
        <Route path="/test" element={<DashboardLayoutBasic />} />
        <Route path="/home" element={<Home1 />} />
        <Route path="/login"element={<Login/>} />
        <Route path="/login1" element={<Login1 />} />
        <Route path="/home1" element={<Home1 />} />
       
        <Route path="/getemp" element={<EmployeeListPage/>} />
        
      </Routes>
      </EmployeeContextProvider>
      {/* <Home1 /> */}
      <Footer />
    </div>
  );
}

export default App;


//https://chatgpt.com/share/67a50a63-bc1c-800d-b12f-7c2e22e2203b