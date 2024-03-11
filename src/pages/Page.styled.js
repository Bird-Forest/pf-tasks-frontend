import styled from 'styled-components';

export const WrapHome = styled.div`
  top: 100px;
  display: flex;
  width: 900px;
  height: 100%;
`;

export const WrapTasksPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
  width: 90%;
  background-color: #e0e0e0;
  /* height: 100%; */
  margin: 0;
  padding: 8px;
  border-radius: 8px;
  @media screen and (min-width: 767px) {
    width: 760px;
  }
  /* @media screen and (min-width: 380px) {
    min-width: 360px;
  }
  @media screen and (min-width: 440px) {
    min-width: 420px;
  }
  @media screen and (min-width: 500px) {
    width: 480px;
  } */
`;

export const WrapSignPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  width: 100%;
  margin: 0;
  padding: 28px 0 0 0;
  @media screen and (min-width: 767px) {
    width: 760px;
  }
`;
export const TitleSignPage = styled.h3`
  font-size: 24px;
  font-weight: 700;
  line-height: 1.5;
  text-align: center;
  color: #424242;
`;
// export const WrapLoginPage = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   align-items: center;
//   gap: 20px;
//   width: 100%;
//   height: 100vh;
//   margin: 0 auto;
//   padding: 72px 0 0 0;
// `;
// export const TitleLoginPage = styled.h2`
//   font-size: 24px;
//   color: #1769aa;
//   padding: 0;
//   margin: 0;
// `;
