import React, { useState } from 'react';
import {
  BtnDelete,
  BtnSetting,
  BtnStatus,
  DateTask,
  SettingTask,
  StatusTask,
  Text,
  TextTask,
  WrapTask,
} from './Task.styled';
import { BsFillTrash3Fill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { deleteTask, changeTaskColor } from 'redux/tasks/tasksSlice';
import { BsEmojiWink } from 'react-icons/bs';
import { FaCogs } from 'react-icons/fa';

export default function MyTask({ task }) {
  const dispatch = useDispatch();
  const [isMoving, setIsMoving] = useState(false);

  const handleSettingClick = () => {
    setIsMoving(!isMoving);
  };

  return (
    <WrapTask id={nanoid()}>
      <DateTask>{task.date}</DateTask>
      <StatusTask>{task.completed}</StatusTask>
      <TextTask style={{ backgroundColor: task.color }}>
        <Text>{task.title}</Text>
        <SettingTask
          style={{
            transform: isMoving ? 'translate(0, 0)' : 'translate(80%, 0)',
          }}
        >
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
      </TextTask>
    </WrapTask>
  );
}
