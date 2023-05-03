import React from 'react';
import './TodoForm.css';
import { useNavigate } from 'react-router-dom';

const TodoForm = ({label, defaultTodoText, submitText, submitEvent, loading, isInTodos }) => {
  const navigate = useNavigate();
  const [formError, setFormError] = React.useState(false);
  const [newTodoValue, setNewTodoValue] = React.useState(defaultTodoText || "");
  

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
          disabled={loading}
        >
          {submitText}
        </button>
      </div>
    </form>
  );
}

export default TodoForm