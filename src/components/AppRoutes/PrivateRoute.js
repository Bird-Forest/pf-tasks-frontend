import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isAuthentication, isAuthorization } = useAuth();
  const isUser = !isAuthentication && !isAuthorization;

  return isUser ? <Navigate to={redirectTo} /> : Component;
};
