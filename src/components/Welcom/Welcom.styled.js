import styled from 'styled-components';
export const WrapAuthNav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
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
`;
