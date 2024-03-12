import { Suspense } from 'react';
import React from 'react';
import { Container } from './App.styled';
import Loading from './Loader/Loader';
import AppBar from './AppBar/AppBar';
import CustomRoutes from './AppRoutes/CustomRoutes';
// import { useDispatch } from 'react-redux';
// import { useAuth } from 'hooks';
// import { refreshThunk } from 'redux/user/operations';

export const App = () => {
  // const dispatch = useDispatch();
  // const { isRefreshing } = useAuth();

  // useEffect(() => {
  //   dispatch(refreshThunk());
  // }, [dispatch]);

  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Loading />}>
        <CustomRoutes />
      </Suspense>
    </Container>
  );
};
