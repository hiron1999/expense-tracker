import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          {props.list_years.map((year,index)  =>(
            <option 
            key={index}
            value={year}>
              {year}
            </option>
          ))}

        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;