import axios from 'axios';
import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext'; // Use AuthContext directly

export const UserContext = createContext();

const client = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export const UserContextProvider = ({ children }) => {
  const [employeesData, setEmployeesData] = useState([]);
  const { userRole, loginAs } = useContext(AuthContext); // Correctly use AuthContext here
  const navigate = useNavigate();

  const getEmployees = async () => {
    try {
      const response = await client.get('/users');
      setEmployeesData(response.data);
      return response.data;
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const validateEmail = async (email) => {
    try {
      const response = await client.post('/validate-email', { email });
      return response.data.exists;
    } catch (error) {
      console.error('Error validating email:', error);
      throw new Error('Failed to validate email');
    }
  };

  const Login = async (email, password) => {
    try {
      const request = await client.post('/login', {
        email,
        password,
      });

      if (request.status === 200) {
        const role = request.data.user.role; // Get the user role from the response
        localStorage.setItem('token', request.data.token);
        localStorage.setItem('user', JSON.stringify({ email }));

        // Update the role in the AuthContext
        loginAs(role);

        // Navigate based on the role
        if (role === 'admin') {
          navigate('/admin');
        } else if (role === 'employee') {
          navigate('/employee');
        } else if (role === 'thirdParty') {
          navigate('/third-party');
        } else {
          navigate('*');
        }
      }
    } catch (e) {
      console.error('Login failed:', e);
      // Handle error gracefully here or show message to user
    }
  };

  const data = {
    employeesData,
    getEmployees,
    validateEmail,
    Login,
  };

  return (
    <UserContext.Provider value={data}>
      {children}
    </UserContext.Provider>
  );
};
