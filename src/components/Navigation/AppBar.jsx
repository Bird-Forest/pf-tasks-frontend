import React from 'react';
import { HeaderWrap, StyledNavLink } from './Navigation.styled';
import { WrapNavigate } from '../App.styled';
import UserLogo from './UserLogo';
import { FaHome } from 'react-icons/fa';

export default function AppBar() {
  return (
    <WrapNavigate>
      <HeaderWrap>
        <StyledNavLink to="/">
          <FaHome className="icon-link" />
        </StyledNavLink>
        <StyledNavLink to="/tasks">Tasks</StyledNavLink>
        <UserLogo />
      </HeaderWrap>
    </WrapNavigate>
  );
}
