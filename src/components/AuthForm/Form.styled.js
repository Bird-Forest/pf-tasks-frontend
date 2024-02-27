import styled from 'styled-components';

export const MyStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #ffffff;
  border-radius: 24px;
  border: 1px solid #eeeeee;
  box-shadow: 0px 4px 8px 0px RGBA(158, 158, 158, 0.34);
  .my-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    padding: 40px 20px;
  }
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 280px;
    height: 48px;
    color: #424242;
    font-size: 16px;
    font-weight: 400;
    background-color: #f5f5f5;
    box-shadow: 0px 4px 8px 0px RGBA(158, 158, 158, 0.34);
    border-radius: 10px;
    border: 1px solid #f5f5f5;
    outline: #f5f5f5;
    transition: all 0.3s;
    margin: 40px 0 0 0;
    padding: 0;
    cursor: pointer;
    &:hover,
    :focus {
      background-color: #e0e0e0;
    }
  }
`;
export const InputWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  .my-input {
    width: 260px;
    height: 24px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: #424242;
    border-radius: 10px;
    border: 2px solid #f5f5f5;
    outline: none;
    padding: 8px;
  }
  .my-input.error {
    border: 2px solid #ff1744;
  }
  .label-input {
    font-size: 16px;
    text-align: center;
    color: #616161;
    background-color: #ffffff;
    padding: 0;
    margin: 0;
  }
  /* .label-input.error {
    color: #ff1744;
  } */
  .my-password {
    width: 260px;
    height: 24px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: #424242;
    border-radius: 10px;
    border: 2px solid #f5f5f5;
    outline: none;
    padding: 8px;
  }
  .my-password.error {
    border: 2px solid #ff1744;
  }
`;
export const ShowPasswordBtn = styled.button`
  position: absolute;
  top: 44px;
  right: 8px;
  transform: translateY(-45%);
  background-color: transparent;
  border: none;
  cursor: pointer;
  .icon-eye {
    width: 24px;
    height: 24px;
    fill: #616161;
  }
`;
export const ErrorMessage = styled.div`
  color: #ff1744;
  font-size: 12px;
`;
