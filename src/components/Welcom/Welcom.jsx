import React from 'react';
import { NavLink } from 'react-router-dom';
import { WrapAuthNav } from './Welcom.styled';
import { useAuth } from 'hooks';

export const Welcom = () => {
  const { isLoggedIn } = useAuth();
  return (
    <WrapAuthNav>
      <div className="img"></div>
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

// https://icon-icons.com/ru/%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA/%D0%B1%D1%83%D1%84%D0%B5%D1%80-%D0%BE%D0%B1%D0%BC%D0%B5%D0%BD%D0%B0-%D0%B1%D1%83%D0%BC%D0%B0%D0%B3%D0%B0-%D1%84%D0%B0%D0%B9%D0%BB-%D0%BF%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D1%8C%D0%BD%D0%BE-%D1%81%D0%B4%D0%B5%D0%BB%D0%B0%D0%BD%D0%BE-%D1%81%D0%BF%D0%B8%D1%81%D0%BE%D0%BA-%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82/219488
// https://icon-icons.com/ru/download/188985/ICO/512/
