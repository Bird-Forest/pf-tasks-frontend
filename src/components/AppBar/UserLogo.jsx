import React from 'react';
import { AvatarUser, NameUser, WrapUser } from './Navigation.styled';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/selectors';
import { FaUserSecret } from 'react-icons/fa';

export default function UserLogo() {
  const user = useSelector(selectUser);
  // console.log(user);
  const avatar = user.avatarURL;
  // console.log(avatar);
  const name = user.name;

  return (
    <WrapUser>
      <AvatarUser>
        {avatar === null ? (
          <FaUserSecret className="icon-avatar" />
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
