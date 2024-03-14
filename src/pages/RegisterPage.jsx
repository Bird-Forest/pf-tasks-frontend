import React from 'react';
import { TitleSignPage, WrapSignPage } from './Page.styled';
import FormSignUp from '../components/AuthForm/FormSignUp';
import { WrapOutlet } from '../components/App.styled';

export default function RegisterPage() {
  return (
    <WrapOutlet>
      <WrapSignPage>
        <TitleSignPage>Sign Up</TitleSignPage>
        <FormSignUp />
      </WrapSignPage>
    </WrapOutlet>
  );
}
