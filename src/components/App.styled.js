import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-width: 320px;
  height: 100vh;
  padding: 0;
  margin: 0;
  /* @media screen and (min-width: 767px) {
    width: 760px;
  } */
  /* @media screen and (min-width: 440px) {
    min-width: 440px;
  }
  @media screen and (min-width: 500px) {
    width: 500px;
  } */
`;
export const WrapNavigate = styled.div`
  /* position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0; */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #9e9e9e;
  width: 100%;
  height: 7vh;
  padding: 0;
  margin: 0;
`;
export const WrapOutlet = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #fafafa;
  width: 100%;
  height: 93vh;
  padding: 0;
  margin: 0;
`;
