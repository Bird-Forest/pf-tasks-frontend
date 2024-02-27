import React, { useState } from 'react';
import { BtnSet, WrapSetting } from './Navigation.styled';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { createPortal } from 'react-dom';
import ModalSetting from 'components/PopUp/ModalSetting';

export default function BtnSetting({ user }) {
  const [isShow, setIsShow] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <div>
      <BtnSet onClick={() => setIsShow(!isShow)}>
        {isShow ? (
          <IoIosArrowUp className="icon-arrow" />
        ) : (
          <IoIosArrowDown className="icon-arrow" />
        )}
      </BtnSet>

      <WrapSetting style={{ display: isShow ? 'block' : 'none' }}>
        <button className="btn-set" onClick={openModal}>
          Settings
        </button>
        {showModal &&
          createPortal(
            <ModalSetting onClose={() => setShowModal(false)} />,
            document.body
          )}
        <Link className="log-out">LogOut</Link>
      </WrapSetting>
    </div>
  );
}
