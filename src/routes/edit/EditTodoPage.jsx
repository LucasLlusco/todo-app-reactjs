import React from 'react'
import TodoForm from '../../ui/TodoForm/TodoForm'
import { useLocation, useParams } from 'react-router-dom'
import useTodos from '../../hooks/useTodos';

const EditTodoPage = () => {
  const params = useParams(); 
  const id = Number(params.id) 
  const location = useLocation();
  const { 
    getTodo, 
    handleEditTodo: editTodo, 
  } = useTodos();

  let todoText;

  if(location.state?.todo) {
    todoText = location.state.todo.text; 
  } else { 
    const todo = getTodo(id);
    todoText = todo.text;
  }


  return (
    <TodoForm 
      label={"edita tu TODO"}
      defaultTodoText={todoText}
      submitText={"editar"}
      submitEvent={(newText) => editTodo({id, newText})}
    />
  )
}

export default EditTodoPage