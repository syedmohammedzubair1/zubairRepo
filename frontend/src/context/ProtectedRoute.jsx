import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const ProtectedRoute = ({ allowedRoles, children }) => {
  const { userRole } = useContext(AuthContext);

  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

export default ProtectedRoute;
