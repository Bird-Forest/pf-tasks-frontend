import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTasks } from 'redux/tasks/servise';
import { WrapTasksPage } from './Page.styled';
import FilterTasks from 'components/Filter/FilterTasks';
import { WrapOutlet } from 'components/App.styled';
import Loading from 'components/Loader/Loader';
import { Outlet } from 'react-router-dom';

export default function TasksPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <>
      <WrapOutlet>
        <WrapTasksPage>
          <FilterTasks />
          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
        </WrapTasksPage>
      </WrapOutlet>
    </>
  );
}
