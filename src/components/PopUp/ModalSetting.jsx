import React, { useEffect } from 'react';
import {
  AvatarPopUp,
  Backdrop,
  BtnClose,
  BtnPopUpSave,
  NamePopUp,
  TitlePopUp,
  WrapPopUp,
} from './Modal.styled';
import { IoCloseSharp } from 'react-icons/io5';
import { FaArrowUp } from 'react-icons/fa';
import { FcReddit } from 'react-icons/fc';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/selectors';
import { updateAvatar, updateUser } from '../../redux/user/operations';
// import { useAuth } from 'hooks';

export default function ModalSetting({ onClose }) {
  // const { isAuthentication, isAuthorization } = useAuth();
  // console.log(isAuthentication);
  // console.log(isAuthorization);
  const user = useSelector(selectUser);
  const avatar = user.avatarURL;
  const dispatch = useDispatch();

  useEffect(() => {
    const handleEscape = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  const uploadFile = evt => {
    const formData = new FormData();
    if (evt.target.files.length <= 0) {
      return;
    }
    formData.append('avatar', evt.target.files[0]);
    dispatch(updateAvatar(formData));
    // evt.preventDefault();
    // const file = evt.target.files[0];
    // const file = evt.currentTarget.files[0];
    // console.log(file);
    // const formData = new FormData();
    // formData.append('avatar', file);
    // console.log(formData);
    // dispatch(updateAvatar(file));
  };

  const updateName = evt => {
    const newName = evt.target.value;
    console.log(newName);
    dispatch(updateUser(newName));
  };

  return (
    <Backdrop onClick={onClose}>
      <WrapPopUp onClick={e => e.stopPropagation()}>
        <BtnClose type="button" onClick={onClose}>
          <IoCloseSharp className="close" />
        </BtnClose>
        <TitlePopUp>Setting</TitlePopUp>
        <AvatarPopUp>
          {avatar === null ? (
            <FcReddit className="icon-avatar" />
          ) : (
            <img src={avatar} alt="avatar" className="avatar-img" />
          )}
          <label htmlFor="file" className="lable-text">
            <input
              type="file"
              id="file"
              name="file"
              // value={file}
              // multiple
              accept="image/*"
              // style={{ display: 'none' }}
              className="visually-hidden"
              onClick={uploadFile}
            />
            <FaArrowUp /> Upload your avatar
          </label>

          {/* <button id="fileSelect" type="button" onClick={fileUpload}>
            <FaArrowUp /> Upload your avatar
          </button> */}
        </AvatarPopUp>
        <NamePopUp>
          <h4 className="title-name">Your name</h4>
          <input
            type="text"
            name="user"
            defaultValue={user.name}
            className="input-name"
            onChange={updateName}
          />
        </NamePopUp>
        <BtnPopUpSave type="button" onClick={onClose}>
          Save
        </BtnPopUpSave>
      </WrapPopUp>
    </Backdrop>
  );
}
// onClick={e => e.stopPropagation()}
