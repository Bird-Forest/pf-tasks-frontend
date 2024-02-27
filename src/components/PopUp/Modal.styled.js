import styled from 'styled-components';

export const Backdrop = styled.div`
  top: 0;
  left: 0;
  z-index: 3;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(2px);
  background: rgba(189, 189, 189, 0.5);
`;
export const WrapPopUp = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 400px;
  gap: 16px;
  border-radius: 24px;
  border: 1px solid #bdbdbd;
  background-color: #ffffff;
  padding: 20px;
  margin: 0;
`;
export const BtnClose = styled.button`
  top: 20px;
  right: 20px;
  position: absolute;
  width: 20px;
  height: 20px;
  border: none;
  background-color: #ffffff;
  transition: all 0.3s;
  cursor: pointer;
  padding: 0;
  .close {
    width: 20px;
    height: 20px;
    fill: #424242;
  }
`;
export const TitlePopUp = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.5;
  text-align: center;
  color: #424242;
`;
export const AvatarPopUp = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  .avatar-img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 68px;
    height: 68px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #f5f5f5;
  }
  .icon-avatar {
    width: 68px;
    height: 68px;
    border-radius: 50%;
    background-color: red;
  }
  .visually-hidden {
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
  }
  input.visually-hidden:is(:focus, :focus-within) + label {
    outline: thin dotted;
  }
  .lable-text {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    /* text-align: center; */
    color: #424242;
    cursor: pointer;
  }
`;
export const NamePopUp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  .title-name {
    font-weight: 500;
    font-size: 20px;
    line-height: 1.5;
    text-align: center;
    color: #424242;
  }
  .input-name {
    width: 200px;
    height: 24px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: #424242;
    padding: 10px 12px;
    border: 2px solid #f5f5f5;
    border-radius: 10px;
    outline: none;
  }
`;
export const BtnPopUpSave = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: #424242;
  width: 224px;
  height: 48px;
  padding: 10px 12px;
  margin: 40px auto;
  border-radius: 10px;
  box-shadow: 0px 4px 8px 0px RGBA(158, 158, 158, 0.34);
  background-color: #f5f5f5;
  transition: all 0.3s;
  border: 1px solid #f5f5f5;
  cursor: pointer;
  outline: #f5f5f5;
  &:hover,
  :focus {
    background-color: #e0e0e0;
  }
`;
