import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar1 from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login";
import Login1 from "./pages/Login2step";
import AdminDashBoard from "./components/DashboardComponent/AdminDashBoard.jsx";
import { EmployeeListPage } from "./pages/getEmployees.jsx";
import { EmployeeContextProvider } from "./context/EmployeesContext.jsx";
import { AdminContextProvider } from './context/SuperAdminContext.jsx';
import { ThirdPartyContextProvider } from './context/ThirdPartyContext.jsx';
import { AuthProvider } from "./context/AuthContext.jsx";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./context/ProtectedRoute.jsx"
import Unauthorized from "./pages/Unauthorized.jsx";
import { UserContextProvider } from "./context/UserContext.jsx";
import EmployeeDashBoard from "./components/DashboardComponent/EmployeeDashBoard.jsx";
import ThirdPartyDB from "./components/DashboardComponent/ThirdPartyDB.jsx";
import OHome from "./pages/HomePage/OHome.jsx";
import "./App.css"

import Taskoverview from "./components/DashboardComponent/2Employee/Taskoverview.jsx";
import PerformancePage from "./pages/PerformancePage";
import PerformanceDetail from "./components/DashboardComponent/3ThirdParty/Performance/PerformanceDetail.jsx";
import { PerformanceProvider } from "./context/PerformanceContext";



import InvoiceGenerator from "./components/DashboardComponent/3ThirdParty/EarningManagement/InvoiceGenerator.jsx";
function App() {
  return (
    <>
      <AuthProvider>
        <UserContextProvider>
          <AdminContextProvider>
            <ThirdPartyContextProvider>
              <EmployeeContextProvider>
              <PerformanceProvider>
                <Routes>
                  {/* <Route path="/getemp1" element={<EmployeeListPage />} /> */}

                  <Route path="/" element={<OHome />} />
                  {/* <Route path="/home" element={<Home1 />} /> */}
                  <Route path="/login" element={<Login />} />
                  <Route path="/admin" element={<AdminDashBoard />} />
                  <Route path="/employee" element={<EmployeeDashBoard />} />
                  <Route path="/tdparty" element={<ThirdPartyDB />} />
                  <Route path="/overview" element={<Taskoverview />} />
                  


                  {/* Performance Metrics Routes */}
                  <Route path="/performances" element={<PerformancePage />} />
                  <Route path="/performance/:id" element={<PerformanceDetail />} />

                  <Route path ="/tdparty/EarningManagement/invoice" element={<InvoiceGenerator />} />
                  {/* <Route
                    path="/employee"
                    element={
                      <ProtectedRoute allowedRoles={['employee']}>
                          <EmployeeDashBoard />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/getemp"
                    element={
                      <ProtectedRoute allowedRoles={['admin']}>
                        <EmployeeListPage />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/admin"
                    element={
                      <ProtectedRoute allowedRoles={['admin']}>
                        <AdminDashBoard />
                      </ProtectedRoute>
                    }
                  />

                  {/* Third Party-only route */}
                  {/* <Route
                    path="/third-party"
                    element={
                      <ProtectedRoute allowedRoles={['third-party']}>
                        <ThirdPartyDB />
                      </ProtectedRoute>
                    } */}
                  {/* />  */}

                  {/* Unauthorized page */}
                  <Route path="/unauthorized" element={<Unauthorized />} />

                  {/* 404 Not Found route */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
                </PerformanceProvider>
              </EmployeeContextProvider>
            </ThirdPartyContextProvider>
          </AdminContextProvider>
        </UserContextProvider>
      </AuthProvider>
    </>
  );
}

export default App;
