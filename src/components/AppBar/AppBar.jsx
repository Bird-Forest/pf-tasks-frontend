import React, { useState } from 'react';
import { BtnPlus, HeaderWrap, StyledNavLink } from './Navigation.styled';
import { WrapNavigate } from '../App.styled';
import UserLogo from './UserLogo';
import { FaHome } from 'react-icons/fa';
import { HiPlus } from 'react-icons/hi';
import { createPortal } from 'react-dom';
import TaskForm from 'components/PopUp/TaskForm';
import { useAuth } from '../../hooks';
import BtnSetting from './BtnSetting';

export default function AppBar() {
  const [newTask, setNewTask] = useState(false);
  const { isLoggedIn } = useAuth();

  const openModalNewTask = () => {
    setNewTask(true);
  };
  return (
    <WrapNavigate>
      <HeaderWrap>
        <StyledNavLink to="/">
          <FaHome className="icon-link" />
        </StyledNavLink>
        {isLoggedIn && (
          <>
            <StyledNavLink to="/tasks">Tasks</StyledNavLink>
            <BtnPlus onClick={openModalNewTask}>
              <HiPlus className="icon-plus" />
            </BtnPlus>
            {newTask &&
              createPortal(
                <TaskForm onClose={() => setNewTask(false)} />,
                document.body
              )}
          </>
        )}
        <UserLogo />
        {isLoggedIn && <BtnSetting />}
      </HeaderWrap>
    </WrapNavigate>
  );
}
// import { SiNotepadplusplus } from "react-icons/si";
// <SiNotepadplusplus />
