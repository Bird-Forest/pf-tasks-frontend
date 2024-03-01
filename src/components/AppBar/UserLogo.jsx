import React from 'react';
import { AvatarUser, NameUser, WrapUser } from './Navigation.styled';
import { FcReddit } from 'react-icons/fc';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/selectors';

export default function UserLogo() {
  const user = useSelector(selectUser);
  const avatar = user.avatarURL;
  const name = user.name;

  return (
    <WrapUser>
      <AvatarUser>
        {avatar === null ? (
          <FcReddit className="icon-avatar" />
        ) : (
          <img src={avatar} alt="avatar" className="img-avatar" />
        )}
      </AvatarUser>
      <NameUser>
        {name === null ? (
          <p className="default">R</p>
        ) : (
          <p className="name-text">{name}</p>
        )}
      </NameUser>
    </WrapUser>
  );
}
// <FcReddit className="icon-avatar" />
