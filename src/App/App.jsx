import React from 'react';
import useTodos from './useTodos';
import TodoHeader from '../TodoHeader/TodoHeader';
import TodoCounter from '../TodoCounter/TodoCounter';
import TodoSearch from '../TodoSearch/TodoSearch';
import TodoList from '../TodoList/TodoList';
import TodoItem from '../TodoItem/TodoItem';
import TodosError  from '../TodosError/TodosError';
import TodosLoading  from '../TodosLoading/TodosLoading';
import EmptyTodos  from '../EmptyTodos/EmptyTodos';
import TodoForm from '../TodoForm/TodoForm';
import CreateTodoButton  from '../CreateTodoButton/CreateTodoButton';
import Modal from '../Modal/Modal';
import { ChangeAlertWithStorageListener } from '../ChangeAlert/ChangeAlert';
import EmptySearchTodos from '../EmptySearchTodos/EmptySearchTodos';

function App() {
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

export default App;