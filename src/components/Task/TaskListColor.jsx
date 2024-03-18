import Loading from 'components/Loader/Loader';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectFilter, selectIsLoading, selectTasks } from 'redux/selectors';

import { WrapList } from './Task.styled';
import MyTask from './MyTask';
import TaskListEmpty from './TaskListEmpty';
import { nanoid } from 'nanoid';

export default function TaskListColor() {
  const isLoading = useSelector(selectIsLoading);
  const tasks = useSelector(selectTasks);
  const filter = useSelector(selectFilter);
  const priorities = tasks.filter(task => task.color === filter);
  const showArr = Array.isArray(priorities) && priorities.length !== 0;
  return (
    <>
      {isLoading && <Loading />}

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
