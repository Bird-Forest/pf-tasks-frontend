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
import { BsEmojiWink } from 'react-icons/bs';
import { FaCogs } from 'react-icons/fa';
import { BsHandThumbsUp } from 'react-icons/bs';
import { changeTaskColor, deleteTask } from 'redux/tasks/servise';
import { filters } from '../../redux/filter/constans';

export default function MyTask({ task }) {
  const dispatch = useDispatch();
  const [isMoving, setIsMoving] = useState(false);

  const handleSettingClick = () => {
    setIsMoving(!isMoving);
  };

  const handleDeleteTask = evt => {
    const taskId = evt.currentTarget.name;
    dispatch(deleteTask(taskId));
  };

  const handleChangeColor = evt => {
    const newTask = {
      taskId: evt.currentTarget.name,
      newColor: evt.currentTarget.value,
    };
    dispatch(changeTaskColor(newTask));
  };

  return (
    <WrapTask id={task._id}>
      <Wrapper>
        <TaskBackGr style={{ backgroundColor: task.color }}>
          <Text>{task.title}</Text>
          <SettingTask
            style={{
              transform: isMoving ? 'translate(0, 0)' : 'translate(-124%, 0)',
            }}
          >
            <BtnStatus
              type="button"
              name={task._id}
              // color="#64b5f6"
              // value="#64b5f6"
              value={filters.blue}
              onClick={handleChangeColor}
            >
              <BsHandThumbsUp className="icon-color" />
            </BtnStatus>
            <BtnStatus
              type="button"
              name={task._id}
              // color="#ff5252"
              // value="#ff5252"
              value={filters.red}
              onClick={handleChangeColor}
            >
              <BsEmojiWink className="icon-color" />
            </BtnStatus>
            <BtnStatus
              type="button"
              name={task._id}
              // color="#ffee58"
              // value="#ffee58"
              value={filters.yellow}
              onClick={handleChangeColor}
            >
              <BsEmojiWink className="icon-color" />
            </BtnStatus>
            <BtnStatus
              type="button"
              name={task._id}
              // color="#00e676"
              // value="#00e676"
              value={filters.green}
              onClick={handleChangeColor}
            >
              <BsEmojiWink className="icon-color" />
            </BtnStatus>
            <BtnDelete name={task._id} onClick={handleDeleteTask}>
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
