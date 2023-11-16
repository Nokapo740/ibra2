// src/Filter.js
import React, { useState } from 'react';

const Filter = ({ onFilterChange }) => {
  const [filterValue, setFilterValue] = useState('');

  const handleInputChange = (event) => {
    setFilterValue(event.target.value);
  };

  const handleFilter = () => {
    onFilterChange(filterValue);
  };

  return (
    <div>
      <label htmlFor="filterInput">Фильтр:</label>
      <input
        type="text"
        id="filterInput"
        value={filterValue}
        onChange={handleInputChange}
      />
      <button onClick={handleFilter}>Применить фильтр</button>
    </div>
  );
};

export default Filter;

