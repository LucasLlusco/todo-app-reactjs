import React from 'react';
import './TodoCounter.css';

const TodoCounter = ({ totalTodos, completedTodos }) => {
  return (
    <h2 className={"TodoCounter"}>
      <>Has completado <span>{completedTodos}</span> de <span>{totalTodos} </span>TODOs</>
    </h2>
  );
}

export default TodoCounter