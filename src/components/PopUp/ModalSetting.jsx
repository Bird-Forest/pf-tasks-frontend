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
import { updateAvatar } from '../../redux/user/operations';

export default function ModalSetting({ onClose }) {
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
    const picture = evt.target.files[0];
    const formData = new FormData();
    formData.append('avatar', picture);
    console.log(formData);
    dispatch(updateAvatar(formData));
  };

  const updateName = evt => {
    const newName = evt.target.value;
    console.log(newName);
    dispatch(updateAvatar(newName));
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
          <input
            type="file"
            id="fileElem"
            name="fileElem"
            // value={file}
            // multiple
            accept="image/*"
            // style={{ display: 'none' }}
            className="visually-hidden"
            onClick={uploadFile}
          />
          <label htmlFor="fileElem" className="lable-text">
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
