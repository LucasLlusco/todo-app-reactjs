import React from 'react';
import './TodoSearch.css';

const TodoSearch = ({ searchValue, setSearchValue, loading }) => {
  
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="TodoSearch-container">
      <input
        className="TodoSearch"
        placeholder="Buscar"
        value={searchValue}
        onChange={onSearchValueChange}
        disabled={loading}
      />
    </div>
  );
}

export default TodoSearch