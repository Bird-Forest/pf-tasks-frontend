// import TaskList from '../components/Task/TaskList';
import React from 'react';
// import { WrapHome } from './Page.styled';
import { AuthNav } from '../components/AuthNav/AuthNav';
import { WrapOutlet } from '../components/App.styled';

export default function HomePage() {
  return (
    <WrapOutlet>
      <AuthNav />
    </WrapOutlet>
  );
}
