import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const APP_BASE_URL = 'http://localhost:4000/api/v1';

export const EmployeeContext = createContext();

const client = axios.create({
  baseURL: APP_BASE_URL,
});

export const EmployeeContextProvider = ({ children }) => {
  const [employeesData, setEmployeesData] = useState([]);
  const navigate = useNavigate();  // Renamed router to navigate for better understanding

  const getEmployees = async () => {
    try {
      const response = await client.get("/employees");
      setEmployeesData(response.data); // Ensures the data is stored in state
      return response.data;
    } catch (error) {
      console.error("Error fetching employees:", error);  // Improved error handling
    }
  };

  const data = {
    employeesData,
    getEmployees,
  };

  return (
    <EmployeeContext.Provider value={data}>
      {children}
    </EmployeeContext.Provider>
  );
};
