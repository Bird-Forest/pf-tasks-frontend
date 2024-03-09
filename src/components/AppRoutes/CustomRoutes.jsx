import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';

import { RestrictedRoute } from './RestrictedRoute';
import { PablicRoute } from './PublicRoute';

const HomePage = lazy(() => import('../../pages/HomePage'));
const RegisterPage = lazy(() => import('../../pages/RegisterPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage'));
const TasksPage = lazy(() => import('../../pages/TasksPage'));

export default function CustomRoutes() {
  return (
    <>
      <Routes>
        {/* <Route
          path="/"
          element={
            <RestrictedRoute redirectTo="/tasks" component={<HomePage />} />
          }
        /> */}
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/register" element={<RegisterPage />} /> */}
        <Route
          path="/register"
          element={
            <PablicRoute redirectTo="/login" component={<RegisterPage />} />
          }
        />
        {/* <Route path="/login" element={<LoginPage />} /> */}
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />
          }
        />

        <Route
          path="/tasks"
          element={<PrivateRoute redirectTo="/" component={<TasksPage />} />}
        />
      </Routes>
      {/* <Route
          path="/tasks"
          element={<PrivateRoute component={<TasksPage />} />}
        />
      </Routes> */}
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
