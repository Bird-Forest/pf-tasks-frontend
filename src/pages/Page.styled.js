import styled from 'styled-components';
import picture from '../img/icon_219488.png';

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
`;

export const WrapSignPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  width: 100%;
  margin: 0;
  padding: 16px 0 0 0;
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
export const WrapNotFound = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 20px 0 0 0;
  padding: 0;
  .title {
    font-size: clamp(1rem, 0.818rem + 0.91vw, 1.5rem);
    font-weight: 700;
    color: #616161;
    margin: 0;
    padding: 0;
  }
  .img {
    width: 160px;
    height: 160px;
    background-image: url(${picture});
    background-repeat: no-repeat;
    background-size: cover;
    margin: 0;
    padding: 0;
  }
`;
