import { useAuth } from 'hooks';
import React from 'react';
import { Navigate } from 'react-router-dom';

export const PablicRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};