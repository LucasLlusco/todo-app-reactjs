import React from 'react';
import './CreateTodoButton.css';

const CreateTodoButton = (props) =>  {
  
  const onClickButton = () => {
    props.setOpenModal(prevState => !prevState);
  };

  return (
    <button
      className="CreateTodoButton"
      onClick={onClickButton}
      disabled={props.loading}
    >
      +
    </button>
  );
}

export default CreateTodoButton