import React from 'react';
import { HeaderWrap, StyledNavLink } from './Navigation.styled';
import { WrapNavigate } from '../App.styled';
import UserLogo from './UserLogo';

export default function AppBar() {
  return (
    <WrapNavigate>
      <HeaderWrap>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/tasks">Tasks</StyledNavLink>
        <UserLogo />
      </HeaderWrap>
    </WrapNavigate>
  );
}
