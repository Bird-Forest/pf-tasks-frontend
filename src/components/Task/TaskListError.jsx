import React from 'react';
import { WrapEmpty } from './Task.styled';
import { SiNotepadplusplus } from 'react-icons/si';
import { useSelector } from 'react-redux';
import { selectErrorTasks } from 'redux/selectors';

export default function TaskListError() {
  const error = useSelector(selectErrorTasks);
  return (
    <WrapEmpty>
      <h4 className="empty-text">{error}</h4>
      <SiNotepadplusplus className="icon-lizard" />
    </WrapEmpty>
  );
}
