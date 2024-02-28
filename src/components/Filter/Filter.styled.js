import styled from 'styled-components';

export const TitleTab = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2px;
  width: 100%;

  padding: 0;
  margin: 0;
`;
// export const CellDate = styled.div`
//   display: flex;
//   flex-basis: 54px;
//   height: 36px;
//   justify-content: center;
//   align-items: center;
//   background-color: #9e9e9e;
//   border-radius: 8px;
//   border: 3px solid RGBA(117, 117, 117, 0.6);
//   margin: 0;
//   padding: 0;
//   .date {
//     width: 50px;
//     height: 32px;
//     border-radius: 4px;
//     background-color: #f5f5f5;
//     outline: none;
//     border: none;
//     padding: 0;
//     margin: 0;
//   }
// `;
// export const CellStatus = styled.div`
//   display: flex;
//   flex-basis: 36px;
//   justify-content: center;
//   align-items: center;
//   height: 36px;
//   background-color: #9e9e9e;
//   border-radius: 8px;
//   border: 3px solid RGBA(117, 117, 117, 0.6);
//   margin: 0;
//   .status {
//     width: 32px;
//     height: 32px;
//     border-radius: 4px;
//     background-color: #f5f5f5;
//     outline: none;
//     border: none;
//     padding: 0;
//     margin: 0;
//   }
// `;
export const CellStatus = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  height: 36px;
  background-color: #9e9e9e;
  border-radius: 8px;
  border: 3px solid RGBA(117, 117, 117, 0.6);
  padding: 0 2px;
  margin: 0;
  .wrap {
    display: flex;
    flex-grow: 1;
    justify-content: space-around;
    align-items: center;
    height: 32px;
    border-radius: 4px;
    background-color: #f5f5f5;
    outline: none;
    border: none;
    padding: 0;
  }
  .btn-prior {
    display: block;
    font-size: 16px;
    font-weight: 500;
    color: #424242;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    cursor: pointer;
    padding: 0;
    margin: 0;
  }
  .white {
    background-color: #ffffff;
    border: 1px solid #ffffff;
  }
  .blue {
    background-color: #64b5f6;
    border: 1px solid #64b5f6;
  }
  .red {
    background-color: #ff5252;
    border: 1px solid #ff5252;
  }
  .yellow {
    background-color: #ffee58;
    border: 1px solid #ffee58;
  }
  .green {
    background-color: #00e676;
    border: 1px solid #00e676;
  }
`;
