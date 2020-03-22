import React from 'react';

const Filter = ({ searchFilter, filterHandler }) => {
  return (
    <div>
      filter shown with <input value={searchFilter} onChange={filterHandler} />
    </div>
  );
};

export default Filter;
