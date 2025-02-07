import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar1 from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";
import Home1 from "./pages/Home1";
import Login from "./pages/Login";
import Login1 from "./pages/Login2step";
import DashboardLayoutBasic from "./components/DashboardComponent/Employee";
import { EmployeeListPage } from "./pages/getEmployees";
import { EmployeeContextProvider } from "./context/EmployeeContext";
import { AdminProvider } from './context/AdminContext';
import { ThirdPartyProvider } from './context/ThirdPartyContext';
import { AuthProvider } from './context/AuthContext';
import NotFound from "./pages/NotFound";
import ProtectedRoute from './components/ProtectedRoute';
import AdminPage from './pages/AdminPage';
import ThirdPartyPage from './pages/ThirdPartyPage';
import Unauthorized from './pages/Unauthorized';

function App() {
  return (
    <div>
      <AuthProvider>
        <AdminProvider>
          <ThirdPartyProvider>
            <EmployeeContextProvider>
              <Router>
                <Navbar1 />
                <Routes>
                  {/* Public routes */}
                  <Route path="/home" element={<Home1 />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/login1" element={<Login1 />} />

                  {/* Protected routes for employees */}
                  <Route
                    path="/dashboard"
                    element={
                      <ProtectedRoute allowedRoles={['employee']}>
                        <DashboardLayoutBasic />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/getemp"
                    element={
                      <ProtectedRoute allowedRoles={['employee']}>
                        <EmployeeListPage />
                      </ProtectedRoute>
                    }
                  />

                  {/* Admin-only route */}
                  <Route
                    path="/admin"
                    element={
                      <ProtectedRoute allowedRoles={['admin']}>
                        <AdminPage />
                      </ProtectedRoute>
                    }
                  />

                  {/* Third Party-only route */}
                  <Route
                    path="/third-party"
                    element={
                      <ProtectedRoute allowedRoles={['third-party']}>
                        <ThirdPartyPage />
                      </ProtectedRoute>
                    }
                  />

                  {/* Unauthorized page */}
                  <Route path="/unauthorized" element={<Unauthorized />} />

                  {/* 404 Not Found route */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
              </Router>
            </EmployeeContextProvider>
          </ThirdPartyProvider>
        </AdminProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
