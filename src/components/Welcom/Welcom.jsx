import React from 'react';
import { NavLink } from 'react-router-dom';
import { WrapWelcom } from './Welcom.styled';
import { useAuth } from 'hooks';
import { HiPlus } from 'react-icons/hi';

export const Welcom = () => {
  const { isLoggedIn } = useAuth();
  return (
    <WrapWelcom>
      <h2 className="title">My tasks application</h2>
      <p className="point">What can this application do?</p>
      <div className="wrap-point">
        <p className="point">Create a task entry</p>
        <HiPlus className="icon-point" />
      </div>
      <p className="point">Determine task priority</p>
      <div className="wrap-point">
        <div className="circle red"></div>
        <div className="circle yellow"></div>
        <div className="circle green"></div>
      </div>
      <div className="wrap-point">
        <p className="point">Mark completed task</p>
        <div className="circle blue"></div>
      </div>
      <p className="point">Filter by priority</p>
      <p className="point">Delete task</p>
      {isLoggedIn ? (
        <button className="button">
          <NavLink to="/login" className="navigate">
            Sign In
          </NavLink>
        </button>
      ) : (
        <button className="button">
          <NavLink to="/register" className="navigate">
            Sign Up
          </NavLink>
        </button>
      )}
      <div className="img"></div>
    </WrapWelcom>
  );
};

// https://icon-icons.com/ru/%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA/%D0%B1%D1%83%D1%84%D0%B5%D1%80-%D0%BE%D0%B1%D0%BC%D0%B5%D0%BD%D0%B0-%D0%B1%D1%83%D0%BC%D0%B0%D0%B3%D0%B0-%D1%84%D0%B0%D0%B9%D0%BB-%D0%BF%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D1%8C%D0%BD%D0%BE-%D1%81%D0%B4%D0%B5%D0%BB%D0%B0%D0%BD%D0%BE-%D1%81%D0%BF%D0%B8%D1%81%D0%BE%D0%BA-%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82/219488
// https://icon-icons.com/ru/download/188985/ICO/512/
