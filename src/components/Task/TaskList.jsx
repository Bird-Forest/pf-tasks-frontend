import React, { useEffect } from 'react';
import { WrapList } from './Task.styled';
import { selectIsLoading, selectTasks } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import MyTask from './MyTask';
import TaskListEmpty from './TaskListEmpty';
import { fetchTasks } from 'redux/tasks/servise';
import Loading from 'components/Loader/Loader';

export default function TaskList() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const tasks = useSelector(selectTasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const showArr = Array.isArray(tasks) && tasks.length !== 0;
  return (
    <>
      {isLoading && <Loading />}
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
