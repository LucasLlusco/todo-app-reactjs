import React from 'react';
import './CreateTodoButton.css';

const CreateTodoButton = ({onClick, loading}) =>  {

  return (
    <button
      className="CreateTodoButton"
      onClick={onClick}
      disabled={loading}
    >
      +
    </button>
  );
}

export default CreateTodoButton