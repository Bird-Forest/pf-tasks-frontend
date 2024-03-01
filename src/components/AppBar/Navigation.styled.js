import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderWrap = styled.header`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-width: 320px;
  padding: 4px 16px;
  margin: 0;

  @media screen and (min-width: 767px) {
    width: 760px;
  }
`;
export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  text-align: left;
  font-size: clamp(16px, 0.667rem + 1.67vw, 24px);

  font-weight: 700;
  color: #424242;
  transition: all 0.3s;
  margin: 0;
  padding: 0;
  .icon-link {
    width: 30px;
    height: 30px;
    margin: 4px 0 0 0;
  }
  &.active {
    color: #ffffff;
  }
`;
export const BtnPlus = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  background-color: #9e9e9e;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  .icon-plus {
    width: 28px;
    height: 28px;
    color: #ffffff;
  }
`;
export const WrapUser = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 4px;
`;
export const AvatarUser = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // width: 34px;
  // height: 34px;
  // border-radius: 50%;
  // background-color: #ffffff;
  padding: 0;
  margin: 0;
  .img-avatar {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    object-fit: cover;
  }
  .icon-avatar {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: red;
  }
`;
export const NameUser = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .name-text {
    font-size: clamp(16px, 0.833rem + 0.83vw, 20px);
    font-weight: 500;
    color: #ffffff;
  }
  .default {
    font-size: clamp(16px, 0.833rem + 0.83vw, 20px);
    font-weight: 500;
    color: #ffffff;
  }
`;
export const BtnSet = styled.button`
  width: 36px;
  height: 36px;
  padding: 0;
  margin: 0;
  border: none;
  background-color: #9e9e9e;
  transition: all 0.3s;
  cursor: pointer;
  .icon-arrow {
    width: 20px;
    height: 20px;
    fill: #ffffff;
  }
`;
export const WrapSetting = styled.div`
  position: absolute;
  top: 56px;
  right: 20px;
  display: block;
  width: 90px;
  height: 56px;
  border-radius: 12px;
  border: 1px solid #eeeeee;
  background-color: #ffffff;
  box-shadow: 0px 4px 8px 0px RGBA(158, 158, 158, 0.34);
  transition: all 0.3s;
  padding: 12px 16px;
  .btn-set {
    width: 90px;
    height: 20px;
    border: none;
    background-color: #ffffff;
    // font-family: 'Roboto';
    text-align: left;
    font-size: 18px;
    font-weight: 500;
    color: #424242;
    padding: 0;
    cursor: pointer;
    transition: all 0.3s;
    margin-bottom: 8px;
  }
  .log-out {
    width: 80px;
    height: 18px;
    text-decoration: none;
    text-align: left;
    font-size: 18px;
    font-weight: 500;
    color: #424242;
    transition: all 0.3s;
    padding: 0;
  }
`;
