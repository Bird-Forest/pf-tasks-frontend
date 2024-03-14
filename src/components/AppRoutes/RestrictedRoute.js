import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isAuthentication, isAuthorization } = useAuth();
  const isUser = isAuthentication && isAuthorization;

  return isUser ? <Navigate to={redirectTo} /> : Component;
};
