import React, { useEffect } from 'react';
import { WrapList } from './Task.styled';
import {
  selectErrorTasks,
  selectIsLoading,
  selectTasks,
} from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import MyTask from './MyTask';
import TaskListEmpty from './TaskListEmpty';
import { fetchTasks } from 'redux/tasks/servise';
import Loading from 'components/Loader/Loader';
import TaskListError from './TaskListError';

export default function TaskList() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectErrorTasks);

  // const newTasks = useSelector(selectVisibleTasks);
  const tasks = useSelector(selectTasks);

  console.log(tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const showArr = Array.isArray(tasks) && tasks.length !== 0;
  return (
    <>
      {isLoading && <Loading />}
      {error && <TaskListError />}
      <WrapList>
        {showArr ? (
          tasks.map(task => <MyTask task={task} key={nanoid()} />)
        ) : (
          <TaskListEmpty />
        )}
      </WrapList>
    </>
  );
}