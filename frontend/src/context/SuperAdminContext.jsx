import axios from 'axios';
import { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// Create AdminContext
export const AdminContext = createContext();

const client = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export const AdminContextProvider = ({ children }) => {
  const [adminData, setAdminData] = useState(null);
  const navigate = useNavigate();

  // Function to fetch admin data
  const getAdminDetails = async () => {
    try {
      const response = await client.get('/admin');
      setAdminData(response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching admin details:', error);
    }
  };

  // Function to login as admin
  const adminLogin = async (email, password) => {
    try {
      const request = await client.post('/admin/login', { email, password });
      if (request.status === 200) {
        localStorage.setItem('adminToken', request.data.token);
        navigate('/admin/dashboard');
      }
    } catch (error) {
      console.error('Admin login failed:', error);
    }
  };

  const data = {
    adminData,
    getAdminDetails,
    adminLogin,
  };

  return (
    <AdminContext.Provider value={data}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdminContext = () => useContext(AdminContext);
