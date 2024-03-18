import { Suspense } from 'react';
import React from 'react';
import { Container } from './App.styled';
import Loading from './Loader/Loader';
import AppBar from './AppBar/AppBar';
import CustomRoutes from './AppRoutes/CustomRoutes';

export const App = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(refreshThunk());
  //   console.log('CURRENT');
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
