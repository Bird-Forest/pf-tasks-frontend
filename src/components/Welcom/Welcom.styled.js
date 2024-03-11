import styled from 'styled-components';
import task from '../../img/icon_219488.png';
export const WrapAuthNav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 0;
  padding: 0;
  .navigate {
    text-decoration: none;
    font-size: 20px;
    font-weight: 700;
    color: #1769aa;
    &.active {
      color: #2196f3;
    }
  }
  .img {
    width: 128px;
    height: 128px;
    background-image: url(${task});
  }
`;
