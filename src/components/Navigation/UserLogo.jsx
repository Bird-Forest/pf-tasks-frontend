import React from 'react';
import { AvatarUser, NameUser, WrapUser } from './Navigation.styled';
import { FcReddit } from 'react-icons/fc';
import BtnSetting from './BtnSetting';

export default function UserLogo() {
  const userLulu = 'Lulu';

  return (
    <WrapUser>
      <AvatarUser>
        <FcReddit className="icon-avatar" />
      </AvatarUser>
      <NameUser>{userLulu}</NameUser>
      <BtnSetting />
    </WrapUser>
  );
}
