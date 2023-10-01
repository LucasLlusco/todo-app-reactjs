import React from 'react'
import TodoForm from '../../ui/TodoForm/TodoForm'
import useTodos from '../../hooks/useTodos';

const NewTodoPage = () => {
  const { handleAddTodo:addTodo } = useTodos();

  return (
    <TodoForm 
      label={"Escribe tu nuevo TODO"}
      submitText={"añadir"}
      submitEvent={(text) => addTodo(text)} 
    />
  )
}

export default NewTodoPage