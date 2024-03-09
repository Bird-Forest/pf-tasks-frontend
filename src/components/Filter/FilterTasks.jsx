import React from 'react';
import { useSelector } from 'react-redux';
import { selectStatusFilter } from 'redux/selectors';
// import { setStatusFilter } from 'redux/filter/filtersSlice';
import { statusFilters } from 'redux/filter/constans';

import { CellStatus, TitleTab } from './Filter.styled';

export default function FilterTasks() {
  // const dispatch = useDispatch();
  // const tasks = useSelector(selectTasks);
  const count = 0;
  const filter = useSelector(selectStatusFilter);
  // const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <TitleTab>
      <CellStatus>
        <div className="wrap">
          <button
            className="btn-prior white"
            selected={filter === statusFilters.all}
            // onClick={() => handleFilterChange(statusFilters.all)}
          >
            {0}
          </button>
          <button
            className="btn-prior blue"
            selected={filter === statusFilters.blue}
            // onClick={() => handleFilterChange(statusFilters.blue)}
          >
            {count.blue}
          </button>
          <button
            className="btn-prior red"
            selected={filter === statusFilters.red}
            // onClick={() => handleFilterChange(statusFilters.red)}
          >
            {count.red}
          </button>
          <button
            className="btn-prior yellow"
            selected={filter === statusFilters.yellow}
            // onClick={() => handleFilterChange(statusFilters.yellow)}
          >
            {count.yellow}
          </button>
          <button
            className="btn-prior green"
            selected={filter === statusFilters.green}
            // onClick={() => handleFilterChange(statusFilters.green)}
          >
            {count.green}
          </button>
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
