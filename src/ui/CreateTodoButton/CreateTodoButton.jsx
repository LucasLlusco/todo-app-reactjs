import React from 'react';
import './CreateTodoButton.css';

const CreateTodoButton = ({onClick}) =>  {

  return (
    <button
      className="CreateTodoButton"
      onClick={onClick}
    >
      +
    </button>
  );
}

export default CreateTodoButton