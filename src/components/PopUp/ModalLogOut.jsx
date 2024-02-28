import React, { useEffect } from 'react';
import {
  Backdrop,
  BtnClose,
  TitlePopUp,
  WrapBtn,
  WrapPopUp,
  WrapText,
} from './Modal.styled';
import { IoCloseSharp } from 'react-icons/io5';

export default function ModalLogOut({ onClose }) {
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
        <TitlePopUp>Delete entry</TitlePopUp>
        <WrapText>
          <p>Are you sure</p>
          <p>you want to delete</p>
          <p>the entry?</p>
        </WrapText>
        <WrapBtn>
          <button className="btn-log-out cansel" onClick={onClose}>
            Cancel
          </button>
          <button className="btn-log-out delete">Delete</button>
        </WrapBtn>
      </WrapPopUp>
    </Backdrop>
  );
}
