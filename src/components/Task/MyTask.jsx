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
// import { deleteTask, changeTaskColor } from '../../redux/tasks/tasksSlice';
import { BsEmojiWink } from 'react-icons/bs';
import { FaCogs } from 'react-icons/fa';
// import { BsHandThumbsUpFill } from 'react-icons/bs';
import { BsHandThumbsUp } from 'react-icons/bs';
import { changeTaskColor, deleteTask } from 'redux/tasks/servise';
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

  // const taskId = task._id;

  const deleteOneTask = evt => {
    const taskId = evt.currentTarget.name;
    console.log(taskId);
    dispatch(deleteTask(taskId));
  };

  // const taskId = task._id;

  return (
    <WrapTask id={task._id}>
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
                    color: '#64b5f6',
                    _id: task._id,
                  })
                )
              }
            >
              <BsHandThumbsUp className="icon-color" />
            </BtnStatus>
            <BtnStatus
              color="#ff5252"
              onClick={() =>
                dispatch(changeTaskColor({ color: '#ff5252', _id: task._id }))
              }
            >
              <BsEmojiWink className="icon-color" />
            </BtnStatus>
            <BtnStatus
              color="#ffee58"
              onClick={() =>
                dispatch(changeTaskColor({ color: '#ffee58', _id: task._id }))
              }
            >
              <BsEmojiWink className="icon-color" />
            </BtnStatus>
            <BtnStatus
              color="#00e676"
              onClick={() =>
                dispatch(changeTaskColor({ color: '#00e676', _id: task._id }))
              }
            >
              <BsEmojiWink className="icon-color" />
            </BtnStatus>
            <BtnDelete name={task._id} onClick={deleteOneTask}>
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
