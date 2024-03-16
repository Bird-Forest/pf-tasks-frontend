import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  // selectIsRefreshing,
  selectToken,
  selectUser,
} from 'redux/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  // const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);
  const isAuthentication = user.name !== null && user.email !== null;
  const isAuthorization = token !== null;

  return {
    isAuthentication,
    isAuthorization,
    isLoggedIn,
    // isRefreshing,
    user,
    token,
  };
};
