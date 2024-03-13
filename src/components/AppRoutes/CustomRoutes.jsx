import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { PablicRoute } from './PublicRoute';

const HomePage = lazy(() => import('../../pages/HomePage'));
const RegisterPage = lazy(() => import('../../pages/RegisterPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage'));
const TasksPage = lazy(() => import('../../pages/TasksPage'));
const NotFound = lazy(() => import('../../pages/NotFoundPage'));
const Tasks = lazy(() => import('../Task/TaskList'));
const TasksColor = lazy(() => import('../Task/TaskListColor'));

export default function CustomRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={
            <PablicRoute redirectTo="/login" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />
          }
        />
        <Route
          path="/tasks"
          element={<PrivateRoute redirectTo="/" component={<TasksPage />} />}
        >
          <Route path="" element={<Tasks />} end />
          <Route path="color" element={<TasksColor />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
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

// export default function CustomRoutes() {
//   return (
//     <>
//       <Routes>
//         {appRoutes.map(({ path, element }) => (
//           <Route key={path} path={path} element={element} />
//         ))}
//       </Routes>
//     </>
//   );
// }
