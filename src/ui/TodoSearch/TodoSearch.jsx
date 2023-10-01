import React from 'react';
import './TodoSearch.css';

const TodoSearch = ({ searchValue, searchParams, setSearchParams }) => {

  const onSearchValueChange = (event) => {
    let searchText = event.target.value;
    if(searchText) {
      setSearchParams({ search: searchText }); 
    } else {
      searchParams.delete("search"); 
      setSearchParams(searchParams); 
    }
  };

  return (
    <div className="TodoSearch-container">
      <input
        className="TodoSearch"
        placeholder="Buscar"
        value={searchValue}
        onChange={onSearchValueChange}
      />
    </div>
  );
}

export default TodoSearch