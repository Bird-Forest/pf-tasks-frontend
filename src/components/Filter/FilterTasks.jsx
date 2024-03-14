import React from 'react';
import { CellStatus, TitleTab } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setColorFilter } from 'redux/filter/filtersSlice';
import { selectTasks } from 'redux/selectors';
import { filters } from '../../redux/filter/constans';

export default function FilterTasks() {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);

  function getCount(tasks, filter) {
    let count = tasks.filter(task => task.color === filter);
    return count.length;
  }

  const all = tasks.length;
  const white = getCount(tasks, filters.white);
  const blue = getCount(tasks, filters.blue);
  const red = getCount(tasks, filters.red);
  const yellow = getCount(tasks, filters.yellow);
  const green = getCount(tasks, filters.green);

  const handleGetColor = evt => {
    const newColor = evt.target.name;
    if (newColor !== 'all') {
      dispatch(setColorFilter(newColor));
    }
  };

  return (
    <TitleTab>
      <CellStatus>
        <div className="wrap">
          <Link to="" style={{ textDecoration: 'none' }}>
            <button
              name="all"
              className="btn-prior grey"
              onClick={handleGetColor}
            >
              {all}
            </button>
          </Link>
          <Link to="color" style={{ textDecoration: 'none' }}>
            <button
              name={filters.white}
              className="btn-prior white"
              onClick={handleGetColor}
            >
              {white}
            </button>
          </Link>
          <Link to="color" style={{ textDecoration: 'none' }}>
            <button
              // name="#64b5f6"
              name={filters.blue}
              className="btn-prior blue"
              onClick={handleGetColor}
            >
              {blue}
            </button>
          </Link>
          <Link to="color" style={{ textDecoration: 'none' }}>
            <button
              // name="#ff5252"
              name={filters.red}
              className="btn-prior red"
              onClick={handleGetColor}
            >
              {red}
            </button>
          </Link>
          <Link to="color" style={{ textDecoration: 'none' }}>
            <button
              // name="#ffee58"
              name={filters.yellow}
              className="btn-prior yellow"
              onClick={handleGetColor}
            >
              {yellow}
            </button>
          </Link>
          <Link to="color" style={{ textDecoration: 'none' }}>
            <button
              // name="#00e676"
              name={filters.green}
              className="btn-prior green"
              onClick={handleGetColor}
            >
              {green}
            </button>
          </Link>
        </div>
      </CellStatus>
    </TitleTab>
  );
}

//  <BtnAll
//           selected={filter === statusFilters.all}
//           onClick={() => handleFilterChange(statusFilters.all)}
//         >
//           {tasks.length}
//         </BtnAll>
//         <BtnRed
//           selected={filter === statusFilters.red}
//           onClick={() => handleFilterChange(statusFilters.red)}
//         >
//           {count.red}
//         </BtnRed>
//         <BtnYellow
//           selected={filter === statusFilters.yellow}
//           onClick={() => handleFilterChange(statusFilters.yellow)}
//         >
//           {count.yellow}
//         </BtnYellow>
//         <BtnGreen
//           selected={filter === statusFilters.green}
//           onClick={() => handleFilterChange(statusFilters.green)}
//         >
//           {count.green}
//         </BtnGreen>
