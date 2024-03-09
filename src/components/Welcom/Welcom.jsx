import React from 'react';
import { NavLink } from 'react-router-dom';
import { WrapAuthNav } from './Welcom.styled';
import { useAuth } from 'hooks';

export const Welcom = () => {
  const { isLoggedIn } = useAuth();
  return (
    <WrapAuthNav>
      <p>My tasks application</p>
      <p>What can this application do?</p>
      <p>Create a task entry</p>
      <p>Determine task priority</p>
      <p>Mark completed task???</p>
      <p>Filter by priority</p>
      <p>Delete task</p>
      {isLoggedIn ? (
        <NavLink to="/login" className="navigate">
          Sign In
        </NavLink>
      ) : (
        <NavLink to="/register" className="navigate">
          Sign Up
        </NavLink>
      )}
    </WrapAuthNav>
  );
};
