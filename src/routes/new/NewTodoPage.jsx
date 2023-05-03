import React from 'react'
import TodoForm from '../../ui/TodoForm/TodoForm'
import useTodos from '../useTodos';

const NewTodoPage = () => {

  const { addTodo } = useTodos();

  return (
    <TodoForm 
      label={"Escribe tu nuevo TODO"}
      submitText={"añadir"}
      submitEvent={(text) => addTodo(text)} 
    />
  )
}

export default NewTodoPage