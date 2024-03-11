import React, { useState } from 'react';
import { BtnSet, WrapSetting } from './Navigation.styled';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { createPortal } from 'react-dom';
import ModalSetting from '../PopUp/ModalSetting';
import ModalLogOut from '../PopUp/ModalLogOut';

export default function BtnSetting() {
  const [isShow, setIsShow] = useState(false);
  const [showSetting, setShowSetting] = useState(false);
  const [showLogOut, setShowLogOut] = useState(false);

  const openModalSetting = () => {
    setShowSetting(true);
  };
  const openModalLogOut = () => {
    setShowLogOut(true);
  };

  return (
    <>
      <BtnSet onClick={() => setIsShow(!isShow)}>
        {isShow ? (
          <IoIosArrowUp className="icon-arrow" />
        ) : (
          <IoIosArrowDown className="icon-arrow" />
        )}
      </BtnSet>
      <WrapSetting style={{ display: isShow ? 'block' : 'none' }}>
        <button className="btn-set" onClick={openModalSetting}>
          Settings
        </button>
        {showSetting &&
          createPortal(
            <ModalSetting onClose={() => setShowSetting(false)} />,
            document.body
          )}
        <button className="btn-set" onClick={openModalLogOut}>
          LogOut
        </button>
        {showLogOut &&
          createPortal(
            <ModalLogOut onClose={() => setShowLogOut(false)} />,
            document.body
          )}
      </WrapSetting>
    </>
  );
}
