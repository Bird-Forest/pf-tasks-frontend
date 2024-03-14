import styled from 'styled-components';

export const WrapList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
  width: 100%;
  padding: 0;
`;

export const WrapTask = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2px;
  width: 100%;
`;

export const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
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
`;
export const TaskBackGr = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 32px;
  width: 100%;
  background-color: ${props => props.value};
  border-radius: 6px;
  border: 1px solid #bdbdbd;
  padding: 0;
  margin: 0;
`;
export const Text = styled.p`
  display: flex;
  font-size: 16px;
  font-weight: 400;
  color: #424242;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
  padding: 0 0 0 36px;
`;
export const BtnSetting = styled.button`
  position: absolute;
  /* overflow: hidden; */
  display: flex;
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
  background-color: #bdbdbd;
  border: 1px solid #bdbdbd;
  outline: none;
  padding: 0;
  margin: 0;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  cursor: pointer;
  .icon-setting {
    width: 24px;
    height: 24px;
    fill: #ffffff;
  }
  .icon-setting:hover,
  .icon-setting:focus {
    fill: #616161;
  }
`;
export const SettingTask = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
  background-color: #bdbdbd;
  flex-basis: 250px;
  height: 32px;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  padding: 0 4px;
  margin: 0;
  transform: translate(0, 0);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  left: 34px;
`;
export const BtnStatus = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border: 1px solid #616161;
  border-radius: 50%;
  background-color: ${props => props.value};
  cursor: pointer;
  .icon-color {
    width: 24px;
    height: 24px;
    fill: #616161;
  }
`;
export const BtnDelete = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 50%;
  border: 1px solid #616161;
  width: 30px;
  height: 30px;
  padding: 0;
  cursor: pointer;
  .icon-delete {
    width: 20px;
    height: 20px;
    fill: #616161;
  }
`;
export const WrapEmpty = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #e0e0e0;
  padding: 0;
  margin: 20px 0;
  .empty-text {
    font-size: 20px;
    font-weight: 500;
    color: #424242;
  }
  .icon-lizard {
    width: 160px;
    height: 160px;
    fill: #424242;
  }
`;
