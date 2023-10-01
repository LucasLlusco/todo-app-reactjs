import React, { useState } from 'react';
import './TodoForm.css';
import { useNavigate } from 'react-router-dom';

const TodoForm = ({label, defaultTodoText, submitText, submitEvent, isInTodos }) => {
  const navigate = useNavigate();
  const [formError, setFormError] = useState(false);
  const [newTodoValue, setNewTodoValue] = useState(defaultTodoText || "");
  

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  const onCancel = () => {
    navigate("/")
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if(newTodoValue.trim().length !== 0) { 
      submitEvent(newTodoValue);
      navigate("/")
    } else {
      setFormError(true)
    }

  };

  return (
    <section className='TodoForm-container'>
      <form onSubmit={onSubmit}>
        <label>{label}</label>
        <textarea
          value={newTodoValue}
          onChange={onChange}
          placeholder="Comprar comida para el gato"
        />
        {formError && <p className='formError'>El campo está vacio o el TODO ya existe.</p>}
        <div className="TodoForm-buttonContainer">
          <button
            type="button"
            className="TodoForm-button TodoForm-button--cancel"
            onClick={onCancel}
            >
            Cancelar
          </button>
          <button
            type="submit"
            className="TodoForm-button TodoForm-button--add"
          >
            {submitText}
          </button>
        </div>
      </form>
    </section>
  );
}

export default TodoForm