import { lazy, Suspense } from 'react';
import React from 'react';
// import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
// import { PrivateRoute } from './PrivateRoute';
// import { RestrictedRoute } from './RestrictedRoute';
// import { useAuth } from 'hooks';
// import { refreshUser } from 'redux/operations';
// import { Navigation } from './Navigation/Navigation';
// import { refreshThunk } from 'redux/user/operations';
// import { RestrictedRoute } from './AppRoutes/RestrictedRoute';
// import { PrivateRoute } from './AppRoutes/PrivateRoute';
import { Container } from './App.styled';
import Loading from './Loader/Loader';
import AppBar from './AppBar/AppBar';
// import Layout from './Layout';

const HomePage = lazy(() => import('../pages/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const TasksPage = lazy(() => import('../pages/TasksPage'));
const NotFound = lazy(() => import('../pages/NotFoundPage'));

// const appRoutes = [
//   { path: '/', element: <HomePage /> },
//   {
//     path: '/register',
//     element: (
//       <RestrictedRoute>
//         <RegisterPage />
//       </RestrictedRoute>
//     ),
//   },
//   {
//     path: '/login',
//     element: (
//       <RestrictedRoute>
//         <LoginPage />
//       </RestrictedRoute>
//     ),
//   },
//   {
//     path: '/tasks',
//     element: (
//       <PrivateRoute>
//         <TasksPage />
//       </PrivateRoute>
//     ),
//   },
// ];

export const App = () => {
  // const dispatch = useDispatch();
  // const { isRefreshing } = useAuth();

  // useEffect(() => {
  //   dispatch(refreshThunk());
  // }, [dispatch]);

  // return isRefreshing ? (
  //   <b>Refreshing user...</b>) :
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="tasks" element={<TasksPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <Routes>
          {appRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes> */}
      </Suspense>
    </Container>
  );
};

// {
//   /* <Route path="/" element={<Layout />}>
//   <Route index element={<HomePage />} />
//   <Route
//     path="/register"
//     element={
//       <RestrictedRoute redirectTo="/tasks" component={<RegisterPage />} />
//     }
//   />
//   <Route
//     path="/login"
//     element={<RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />}
//   />
//   <Route
//     path="/tasks"
//     element={<PrivateRoute redirectTo="/login" component={<TasksPage />} />}
//   />
// </Route>; */
// }
