import Loading from 'components/Loader/Loader';
import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectErrorTasks,
  selectFilter,
  selectIsLoading,
  selectTasks,
} from 'redux/selectors';
import TaskListError from './TaskListError';
import { WrapList } from './Task.styled';
import MyTask from './MyTask';
import TaskListEmpty from './TaskListEmpty';
import { nanoid } from 'nanoid';

export default function TaskListColor() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectErrorTasks);
  const tasks = useSelector(selectTasks);
  const filter = useSelector(selectFilter);
  console.log(filter);
  const priorities = tasks.filter(task => task.color === filter);
  const showArr = Array.isArray(priorities) && priorities.length !== 0;
  return (
    <>
      {isLoading && <Loading />}
      {error && <TaskListError />}
      <WrapList>
        {showArr ? (
          priorities.map(task => <MyTask task={task} key={nanoid()} />)
        ) : (
          <TaskListEmpty />
        )}
      </WrapList>
    </>
  );
}
