import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderWrap = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 720px;
  padding: 0 40px;
  margin: 0 auto;
`;
export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  text-align: left;
  font-size: 24px;
  font-weight: 700;
  color: #424242;
  transition: all 0.3s;
  /* margin-right: 20px; */
  .icon-link {
    width: 36px;
    height: 36px;
  }
  &.active {
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
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: #ffffff;
  padding: 0;
  margin: 0;
  .icon-avatar {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background-color: red;
  }
`;
export const NameUser = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .name-text {
    font-size: 24px;
    font-weight: 500;
    color: #ffffff;
  }
  .default {
    font-size: 32px;
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
    font-family: 'Roboto';
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
// export const SettingBtn = styled.button`
//   width: 90px;
//   height: 40px;
//   /* text-decoration: none; */
//   text-align: left;
//   font-size: 16px;
//   font-weight: 500;
//   color: #424242;
// `;
// export const NavMenuLink = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   margin: 0 auto;
//   padding: 0;
//   .navigate {
//     display: none;
//     visibility: hidden;
//     text-decoration: none;
//     font-size: 20px;
//     font-weight: 700;
//     color: white;
//     &.active {
//       color: #2196f3;
//     }
//   }

// `;

// export const AuthMenu = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   min-width: 300px;
//   padding: 0 10px;
//   /* margin: 0 auto; */
//   @media screen and (min-width: 380px) {
//     min-width: 360px;
//   }
//   @media screen and (min-width: 440px) {
//     min-width: 420px;
//   }
//   @media screen and (min-width: 500px) {
//     width: 480px;
//   }
// `;

// export const LogMenu = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   min-width: 300px;
//   /* padding: 0 10px; */
//   /* margin: 0 auto; */
//   @media screen and (min-width: 380px) {
//     min-width: 360px;
//   }
//   @media screen and (min-width: 440px) {
//     min-width: 420px;
//   }
//   @media screen and (min-width: 500px) {
//     width: 480px;
//     /* padding: 0 20px; */
//   }
// `;
// export const MobileMenu = styled.div`
//   display: block;
//   @media screen and (min-width: 440px) {
//     display: none;
//   }
// `;
// export const BtnMenu = styled.button`
//   display: block;
//   background-color: #1769aa;
//   border: #1769aa;
//   width: 36px;
//   height: 36px;
//   margin: 0 0 0 10px;
//   padding: 0;
//   .icon-menu {
//     background-color: #1769aa;
//     width: 36px;
//     height: 36px;
//     fill: white;
//   }
//   @media screen and (min-width: 440px) {
//     display: none;
//   }
// `;
// export const TabletMenu = styled.div`
//   display: none;
//   @media screen and (min-width: 440px) {
//     display: block;
//   }
// `;

// export const WrapMenu = styled.div`
//   position: absolute;
//   top: 64px;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   align-items: center;
//   width: 100vw;
//   height: 100vh;
//   background-color: #4dabf5;
//   margin: 0;
//   padding: 0;
//   @media screen and (min-width: 440px) {
//     display: none;
//     visibility: hidden;
//   }
// `;
