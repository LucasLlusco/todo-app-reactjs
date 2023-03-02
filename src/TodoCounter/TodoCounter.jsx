import React from 'react';
import './TodoCounter.css';

const TodoCounter = ({ totalTodos, completedTodos, loading }) => {
  return (
    <h2 className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}>
      {!!loading ? "Cargando TODOs..." : (
        <>Has completado <span>{completedTodos}</span> de <span>{totalTodos} </span>TODOs</>
      )
      
    }
      
    </h2>
  );
}

export default TodoCounter