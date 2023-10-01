import React from 'react';
import useTodos from '../../hooks/useTodos';
import TodoHeader from '../../ui/TodoHeader/TodoHeader';
import TodoCounter from '../../ui/TodoCounter/TodoCounter';
import TodoSearch from '../../ui/TodoSearch/TodoSearch';
import TodoList from '../../ui/TodoList/TodoList';
import TodoItem from '../../ui/TodoItem/TodoItem';
import EmptyTodos  from '../../ui/EmptyTodos/EmptyTodos';
import CreateTodoButton  from '../../ui/CreateTodoButton/CreateTodoButton';
import EmptySearchTodos from '../../ui/EmptySearchTodos/EmptySearchTodos';
import { useNavigate } from 'react-router-dom';
import { ChangeAlertWithStorageListener } from '../../ui/ChangeAlert/ChangeAlert';

const HomePage = () => {
  const navigate = useNavigate();
  const {
    searchedTodos,
    handleCompleteTodo: completeTodo,
    handleDeleteTodo: deleteTodo,
    totalTodos,
    completedTodos,
    searchValue,
    searchParams,
    setSearchParams,
  } = useTodos();
  
  return (
    <>
      <TodoHeader>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch
          searchValue={searchValue}
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
      </TodoHeader>

      <TodoList
        totalTodos={totalTodos}
        searchedTodos={searchedTodos}
        searchText={searchValue}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={() => <EmptySearchTodos searchText={searchValue} />}
      >
        {todo => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onEdit={() => navigate(`/edit/${todo.id}`, {state: {todo}})} 
            onComplete={() => completeTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
          />
        )}
      </TodoList>
      <CreateTodoButton
        onClick={() => navigate("/new")}
      />
      {/* <ChangeAlertWithStorageListener
        synchronizedTodos={synchronizedTodos}
        synchronizeTodos={synchronizeTodos}
      /> */}
    </>
  );
}

export default HomePage