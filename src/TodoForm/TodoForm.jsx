import React from 'react';
import './TodoForm.css';

const TodoForm = ({ addTodo, setOpenModal, isInTodos }) => {
  const [newTodoValue, setNewTodoValue] = React.useState('');
  const [formError, setFormError] = React.useState(false);
  
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  const onCancel = () => {
    setOpenModal(false);
  };
  
  const onSubmit = (event) => {
    event.preventDefault();
    if(newTodoValue.trim().length !== 0) { 
      if(isInTodos(newTodoValue)) { 
        setFormError(true)
        return
      } else {
        addTodo(newTodoValue);
        setOpenModal(false); 
      }
    } else {
      setFormError(true)
    }

  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
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
          Añadir
        </button>
      </div>
    </form>
  );
}

export default TodoForm