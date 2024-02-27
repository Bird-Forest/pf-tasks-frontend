import React from 'react';
import { TitleSignPage, WrapSignPage } from './Page.styled';
import { WrapOutlet } from '../components/App.styled';
import FormSignIn from '../components/AuthForm/FormSignIn';

export default function LoginPage() {
  return (
    <WrapOutlet>
      <WrapSignPage>
        <TitleSignPage>Log In</TitleSignPage>
        <FormSignIn />
      </WrapSignPage>
    </WrapOutlet>
  );
}
