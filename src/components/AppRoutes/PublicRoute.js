import { useAuth } from 'hooks';
import React from 'react';
import { Navigate } from 'react-router-dom';

export const PablicRoute = ({ component: Component, redirectTo = '/' }) => {
  // const { isLoggedIn } = useAuth();
  const { isAuthentication } = useAuth();

  return isAuthentication ? <Navigate to={redirectTo} /> : Component;
};
