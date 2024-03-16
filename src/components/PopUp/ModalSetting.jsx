import React, { useEffect } from 'react';
import {
  Backdrop,
  BtnClose,
  BtnPopUpSave,
  NamePopUp,
  TitlePopUp,
  WrapPopUp,
} from './Modal.styled';
import { IoCloseSharp } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/selectors';
import { updateUser } from '../../redux/user/operations';
import UploadFile from './UploadFile';

export default function ModalSetting({ onClose }) {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

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

  const updateName = evt => {
    const newName = evt.target.value;
    dispatch(updateUser(newName));
  };

  return (
    <Backdrop onClick={onClose}>
      <WrapPopUp onClick={e => e.stopPropagation()}>
        <BtnClose type="button" onClick={onClose}>
          <IoCloseSharp className="close" />
        </BtnClose>
        <TitlePopUp>Setting</TitlePopUp>
        <UploadFile />
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
