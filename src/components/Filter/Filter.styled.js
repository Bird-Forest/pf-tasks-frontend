import styled from 'styled-components';

export const TitleTab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  min-width: 320px;
  /* height: 52px; */
  background-color: #e0e0e0;
  padding: 2px;
  margin: 0;
`;
export const CellDate = styled.div`
  display: flex;
  flex-basis: 60px;
  justify-content: center;
  align-items: center;
  /* width: 60px; */
  height: 40px;
  background-color: #9e9e9e;
  border-radius: 8px;
  border: 3px solid RGBA(117, 117, 117, 0.6);
  margin: 0;
  .date {
    width: 54px;
    height: 34px;
    border-radius: 4px;
    background-color: #f5f5f5;
    outline: none;
    border: none;
    padding: 0;
  }
`;
export const CellStatus = styled.div`
  display: flex;
  flex-basis: 40px;
  justify-content: center;
  align-items: center;
  /* width: 40px; */
  height: 40px;
  background-color: #9e9e9e;
  border-radius: 8px;
  border: 3px solid RGBA(117, 117, 117, 0.6);
  margin: 0;
  .status {
    width: 34px;
    height: 34px;
    border-radius: 4px;
    background-color: #f5f5f5;
    outline: none;
    border: none;
    padding: 0;
  }
`;
export const CellPriority = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  /* width: 40px; */
  height: 40px;
  background-color: #9e9e9e;
  border-radius: 8px;
  border: 3px solid RGBA(117, 117, 117, 0.6);
  margin: 0;
`;
