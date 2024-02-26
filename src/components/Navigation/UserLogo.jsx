import React from 'react';
import {
  AvatarUser,
  BtnSetting,
  NameUser,
  WrapUser,
} from './Navigation.styled';
import { FcReddit } from 'react-icons/fc';

export default function UserLogo() {
  const userLulu = 'Lulu';

  return (
    <WrapUser>
      <AvatarUser>
        <FcReddit className="icon-avatar" />
      </AvatarUser>
      <NameUser>{userLulu}</NameUser>
      <BtnSetting>Set</BtnSetting>
    </WrapUser>
  );
}
