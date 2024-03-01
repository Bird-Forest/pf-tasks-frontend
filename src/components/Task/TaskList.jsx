import React, { useEffect } from 'react';
import { WrapList } from './Task.styled';
import {
  selectIsLoading,
  selectVisibleTasks,
  selectErrorTasks,
} from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import MyTask from './MyTask';
import TaskListEmpty from './TaskListEmpty';
import { fetchTasks } from 'redux/tasks/servise';

export default function TaskList() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectErrorTasks);
  const newTasks = useSelector(selectVisibleTasks);

  console.log(newTasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const showArr = Array.isArray(newTasks) && newTasks.length !== 0;
  return (
    <>
      {isLoading && <p>Loading tasks...</p>}
      {error && <p>{error}</p>}
      <WrapList>
        {showArr ? (
          newTasks.map(task => <MyTask task={task} key={nanoid()} />)
        ) : (
          <TaskListEmpty />
        )}
      </WrapList>
    </>
  );
}
