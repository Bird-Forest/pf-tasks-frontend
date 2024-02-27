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
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/selectors';

export default function ModalSetting({ onClose }) {
  const user = useSelector(selectUser);
  const avatar = user.avatarURL;

  const fileUpload = evt => {
    console.log(evt.target.files);
    const img = evt.target.files;
    console.log(img);
    console.log(evt.target.name.value);
    const user = evt.target.value;
    console.log(user);
  };

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
  return (
    <Backdrop onClick={onClose}>
      <WrapPopUp onClick={e => e.stopPropagation()}>
        <BtnClose type="button" onClick={onClose}>
          <IoCloseSharp className="close" />
        </BtnClose>
        <TitlePopUp>Setting</TitlePopUp>
        <AvatarPopUp>
          <div className="avatar-img">
            {avatar ? (
              // <img src={`${avatar}`} alt="avatar" />
              <img src={avatar} alt="avatar" />
            ) : (
              <FcReddit className="icon-avatar" />
            )}
          </div>
          <input
            type="file"
            id="fileElem"
            name="fileElem"
            // value={file}
            // multiple
            // accept="image/*"
            // style={{ display: 'none' }}
            className="visually-hidden"
            onClick={fileUpload}
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
            className="input-name"
            onChange={fileUpload}
          />
        </NamePopUp>
        <BtnPopUpSave>Save</BtnPopUpSave>
      </WrapPopUp>
    </Backdrop>
  );
}
