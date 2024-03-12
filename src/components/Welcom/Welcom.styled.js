import styled from 'styled-components';
import task from '../../img/icon_219488.png';

export const WrapWelcom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin: 16px 0 0 0;
  padding: 0;
  .title {
    font-size: clamp(16px, 0.833rem + 0.83vw, 20px);
    font-weight: 700;
    color: #616161;
  }
  .wrap-point {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }
  .point {
    font-size: clamp(12px, 0.583rem + 0.83vw, 16px);
    font-weight: 500;
    color: #616161;
  }
  .icon-point {
    fill: #616161;
    width: 24px;
    height: 24px;
  }
  .circle {
    border-radius: 50%;
    width: 24px;
    height: 24px;
  }
  .red {
    background-color: #ff5252;
    border: 1px solid #ff5252;
  }
  .green {
    background-color: #00e676;
    border: 1px solid #00e676;
  }
  .yellow {
    background-color: #ffee58;
    border: 1px solid #ffee58;
  }
  .blue {
    background-color: #64b5f6;
    border: 1px solid #64b5f6;
  }
  .navigate {
    text-decoration: none;
    font-size: clamp(16px, 0.667rem + 1.67vw, 24px);
    font-weight: 700;
    color: #616161;
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
    margin: 12px 0 0 0;
    padding: 0;
    cursor: pointer;
    &:hover,
    :focus {
      background-color: #e0e0e0;
    }
  }
  .img {
    width: 128px;
    height: 128px;
    background-image: url(${task});
  }
`;
