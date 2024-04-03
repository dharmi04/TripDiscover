import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Your authentication logic goes here...

  return isAuthenticated ? <Component /> : <Navigate to="/login" />;
};

export default PrivateRoute;
