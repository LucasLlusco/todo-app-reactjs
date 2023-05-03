import React from 'react';
import useTodos from '../useTodos';
import TodoHeader from '../../ui/TodoHeader/TodoHeader';
import TodoCounter from '../../ui/TodoCounter/TodoCounter';
import TodoSearch from '../../ui/TodoSearch/TodoSearch';
import TodoList from '../../ui/TodoList/TodoList';
import TodoItem from '../../ui/TodoItem/TodoItem';
import TodosError  from '../../ui/TodosError/TodosError';
import TodosLoading  from '../../ui/TodosLoading/TodosLoading';
import EmptyTodos  from '../../ui/EmptyTodos/EmptyTodos';
import CreateTodoButton  from '../../ui/CreateTodoButton/CreateTodoButton';
import { ChangeAlertWithStorageListener } from '../../ui/ChangeAlert/ChangeAlert';
import EmptySearchTodos from '../../ui/EmptySearchTodos/EmptySearchTodos';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    totalTodos,
    completedTodos,
    searchValue,
    searchParams,
    setSearchParams,
    synchronizeTodos,
  } = useTodos();
  
  return (
    <React.Fragment>
      <TodoHeader loading={loading}>
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
        error={error}
        loading={loading}
        totalTodos={totalTodos}
        searchedTodos={searchedTodos}
        searchText={searchValue}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
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
        loading={loading}
      />
      <ChangeAlertWithStorageListener 
        synchronize={synchronizeTodos} 
      />
      
    </React.Fragment>
  );
}

export default HomePage