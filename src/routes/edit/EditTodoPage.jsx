import React from 'react'
import TodoForm from '../../ui/TodoForm/TodoForm'
import useTodos from '../useTodos'
import { useLocation, useParams } from 'react-router-dom'

const EditTodoPage = () => {
  const params = useParams(); 
  const id = Number(params.id) 
  const location = useLocation();
  const { getTodo, editTodo, loading} = useTodos();

  let todoText;

  if(location.state?.todo) {
    todoText = location.state.todo.text; 
  } else if (loading) { 
    return <p>cargando...</p>
  } else { 
    const todo = getTodo(id);
    todoText = todo.text;
  }


  return (
    <TodoForm 
      label={"edita tu TODO"}
      defaultTodoText={todoText}
      submitText={"editar"}
      submitEvent={(newText) => editTodo(id, newText)}
      loading={loading}
    />
  )
}

export default EditTodoPage