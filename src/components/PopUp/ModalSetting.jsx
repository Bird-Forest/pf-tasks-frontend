import React, { useEffect } from 'react';
import { Backdrop, BtnClose, TitlePopUp, WrapPopUp } from './Modal.styled';
import { IoCloseSharp } from 'react-icons/io5';
import UploadFile from './UploadFile';
import UpdateUserName from './UpdateUserName';

export default function ModalSetting({ onClose }) {
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
        <UploadFile />
        <UpdateUserName />
      </WrapPopUp>
    </Backdrop>
  );
}
