import React from 'react';
import { CellStatus, TitleTab } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setColorFilter } from 'redux/filter/filtersSlice';

export default function FilterTasks() {
  const dispatch = useDispatch();

  const handleGetColor = evt => {
    const newColor = evt.target.name;
    console.log(newColor);
    if (newColor !== 'all') {
      dispatch(setColorFilter(newColor));
    }
  };

  return (
    <TitleTab>
      <CellStatus>
        <div className="wrap">
          <Link to="">
            <button
              name="all"
              className="btn-prior white"
              onClick={handleGetColor}
            >
              all
            </button>
          </Link>
          <Link to="color">
            <button
              name="#ffffff"
              className="btn-prior white"
              onClick={handleGetColor}
            >
              {0}
            </button>
          </Link>
          <Link to="color">
            <button
              name="#64b5f6"
              className="btn-prior blue"
              onClick={handleGetColor}
            >
              {0}
            </button>
          </Link>
          <Link to="color">
            <button
              name="#ff5252"
              className="btn-prior red"
              onClick={handleGetColor}
            >
              {0}
            </button>
          </Link>
          <Link to="color">
            <button
              name="#ffee58"
              className="btn-prior yellow"
              onClick={handleGetColor}
            >
              {0}
            </button>
          </Link>
          <Link to="color">
            <button
              name="#00e676"
              className="btn-prior green"
              onClick={handleGetColor}
            >
              {0}
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
