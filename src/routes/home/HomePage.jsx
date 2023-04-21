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
import TodoForm from '../../ui/TodoForm/TodoForm';
import CreateTodoButton  from '../../ui/CreateTodoButton/CreateTodoButton';
import Modal from '../../ui/Modal/Modal';
import { ChangeAlertWithStorageListener } from '../../ui/ChangeAlert/ChangeAlert';
import EmptySearchTodos from '../../ui/EmptySearchTodos/EmptySearchTodos';

const HomePage = () => {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    isInTodos,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo,
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
          setSearchValue={setSearchValue}
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
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onEdit={() => console.log('Editar todo')}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      </TodoList>
      {!!openModal && (
        <Modal>
          <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}
            isInTodos={isInTodos}

          />
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
        loading={loading}
      />
      <ChangeAlertWithStorageListener 
        synchronize={synchronizeTodos} 
      />
      
    </React.Fragment>
  );
}

export default HomePage