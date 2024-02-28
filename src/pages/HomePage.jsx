// import TaskList from '../components/Task/TaskList';
import React from 'react';
// import { WrapHome } from './Page.styled';
import { Welcom } from '../components/Welcom/Welcom';
import { WrapOutlet } from '../components/App.styled';

export default function HomePage() {
  return (
    <WrapOutlet>
      <Welcom />
    </WrapOutlet>
  );
}
