import React from 'react';
import './TodoSearch.css';
import { useHistory } from 'react-router-dom';

const TodoSearch = ({ searchParams, searchValue, setSearchValue, loading }) => {
  const history = useHistory();
  
  const onSearchValueChange = (event) => {
    let searchText = event.target.value;

    if(searchText) {
      searchParams.set("search", searchText);
      history.push({search: searchParams.toString()})
    } else { 
      searchParams.delete("search");
      history.push({search: searchParams.toString()})
    }
    setSearchValue(searchText);
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