import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, completeTodo, deleteTodo, editTodo } from '../redux/slices/todosSlice';

const useTodos = () => {
  const todos =  useSelector(state => state.data.todos); 
  const dispatch = useDispatch();
  
  const [searchParams, setSearchParams] = useSearchParams();

  const searchValue = searchParams.get("search") || ""; 

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;


  let searchedTodos = [];
  if (!searchValue.length >= 1) {
    searchedTodos = todos; 
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }


  const handleAddTodo = (text) => {
    const id = newTodoId(todos)
    const newTodo = {
      completed: false,
      text,
      id
    }
    dispatch(addTodo(newTodo));
  };

  const getTodo = (id) => {
    const todoIndex = todos.findIndex(todo => todo.id === id);
    return todos[todoIndex];
  }

  const handleCompleteTodo = (id) => {
    dispatch(completeTodo(id))
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleEditTodo = (id, newText) => {
    dispatch(editTodo(id, newText))
  };

  
  const isInTodos = (text) => {
    if(todos.find(todo => todo.text === text)) {
      return true;
    } else {
      return false;
    }
  }
  
  return {
    totalTodos,
    completedTodos,
    searchValue,
    searchParams,
    setSearchParams,
    searchedTodos,
    handleAddTodo, 
    getTodo,
    handleCompleteTodo, 
    handleEditTodo, 
    handleDeleteTodo,
    isInTodos,
  };
}

const newTodoId = (todoList) => {
  if(!todoList.length) { 
    return 1;
  }
  const idList = todoList.map(todo => todo.id)
  const idMax = Math.max(...idList) 
  return idMax + 1;
}

export default useTodos 