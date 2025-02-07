import axios from 'axios';
import { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// Create ThirdPartyContext
export const ThirdPartyContext = createContext();

const client = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export const ThirdPartyContextProvider = ({ children }) => {
  const [thirdPartyData, setThirdPartyData] = useState([]);
  const navigate = useNavigate();

  // Function to fetch third-party data
  const getThirdPartyDetails = async () => {
    try {
      const response = await client.get('/thirdparty');
      setThirdPartyData(response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching third-party details:', error);
    }
  };

  // Function for third-party login
  const thirdPartyLogin = async (email, password) => {
    try {
      const request = await client.post('/thirdparty/login', { email, password });
      if (request.status === 200) {
        localStorage.setItem('thirdPartyToken', request.data.token);
        navigate('/thirdparty/dashboard');
      }
    } catch (error) {
      console.error('Third-party login failed:', error);
    }
  };

  const data = {
    thirdPartyData,
    getThirdPartyDetails,
    thirdPartyLogin,
  };

  return (
    <ThirdPartyContext.Provider value={data}>
      {children}
    </ThirdPartyContext.Provider>
  );
};

// Custom hook to use ThirdPartyContext
export const useThirdPartyContext = () => useContext(ThirdPartyContext);
