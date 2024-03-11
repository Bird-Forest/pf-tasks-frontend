import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';

/**
 * - If the route is restricted and the user is logged in, render a <Navigate> to redirectTo
 * - Otherwise render the component
 */

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, token } = useAuth();
  console.log(token);
  const isAuthorized = isLoggedIn === true && token !== null;
  console.log(isAuthorized);

  return isAuthorized ? <Navigate to={redirectTo} /> : Component;
};