import React from 'react';
import { WrapEmpty } from './Task.styled';
import { SiNotepadplusplus } from 'react-icons/si';

export default function TaskListEmpty() {
  return (
    <WrapEmpty>
      <h4 className="empty-text">It's empty here</h4>
      <SiNotepadplusplus className="icon-lizard" />
    </WrapEmpty>
  );
}
