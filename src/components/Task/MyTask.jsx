import React, { useState } from 'react';
import {
  BtnDelete,
  BtnSetting,
  BtnStatus,
  SettingTask,
  TaskBackGr,
  Text,
  WrapTask,
  Wrapper,
} from './Task.styled';
import { BsFillTrash3Fill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { deleteTask, changeTaskColor } from 'redux/tasks/tasksSlice';
import { BsEmojiWink } from 'react-icons/bs';
import { FaCogs } from 'react-icons/fa';
// import { BsHandThumbsUpFill } from 'react-icons/bs';
import { BsHandThumbsUp } from 'react-icons/bs';
// import { selectStatusFilter } from 'redux/selectors';
// <BsHandThumbsUpFill />

export default function MyTask({ task }) {
  const dispatch = useDispatch();
  const [isMoving, setIsMoving] = useState(false);
  // const filter = useSelector(selectStatusFilter);
  // const completed = filter.white

  const handleSettingClick = () => {
    setIsMoving(!isMoving);
  };

  return (
    <WrapTask id={task.id}>
      <Wrapper>
        <TaskBackGr style={{ backgroundColor: task.color }}>
          {/* <Text>Successfully completed <BsHandThumbsUpFill /></Text> */}
          <Text>{task.title}</Text>
          <SettingTask
            style={{
              transform: isMoving ? 'translate(0, 0)' : 'translate(-124%, 0)',
            }}
          >
            <BtnStatus
              color="#64b5f6"
              onClick={() =>
                dispatch(
                  changeTaskColor({
                    completed: true,
                    color: '#64b5f6',
                    id: task.id,
                  })
                )
              }
            >
              <BsHandThumbsUp className="icon-color" />
            </BtnStatus>
            <BtnStatus
              color="#ff5252"
              onClick={() =>
                dispatch(changeTaskColor({ color: '#ff5252', id: task.id }))
              }
            >
              <BsEmojiWink className="icon-color" />
            </BtnStatus>
            <BtnStatus
              color="#ffee58"
              onClick={() =>
                dispatch(changeTaskColor({ color: '#ffee58', id: task.id }))
              }
            >
              <BsEmojiWink className="icon-color" />
            </BtnStatus>
            <BtnStatus
              color="#00e676"
              onClick={() =>
                dispatch(changeTaskColor({ color: '#00e676', id: task.id }))
              }
            >
              <BsEmojiWink className="icon-color" />
            </BtnStatus>
            <BtnDelete onClick={() => dispatch(deleteTask(task.id))}>
              <BsFillTrash3Fill className="icon-delete" />
            </BtnDelete>
          </SettingTask>
          <BtnSetting onClick={handleSettingClick}>
            <FaCogs className="icon-setting" />
          </BtnSetting>
        </TaskBackGr>
      </Wrapper>
    </WrapTask>
  );
}
