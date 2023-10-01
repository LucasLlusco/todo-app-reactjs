import { createSlice } from '@reduxjs/toolkit'

const todos = JSON.parse(localStorage.getItem('TODOS_V2')) || [];

const saveLocal = (arrayTodos) => {
  const stringifiedItem = JSON.stringify(arrayTodos);
  localStorage.setItem('TODOS_V2', stringifiedItem);
}




const initialState = {
  todos: todos,
}

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodos: (state, action) => {
      state.todos = action.payload;
    },
    addTodo: (state, action) => {
      state.todos.push(action.payload);
      saveLocal(state.todos);
    },
    completeTodo: (state, action) => { 
      const currentTodoIndex = state.todos.findIndex(todo => todo.id === action.payload);
      state.todos[currentTodoIndex].completed = true;
      saveLocal(state.todos);

    },
    deleteTodo: (state, action) => { 
      const newTodos = state.todos.filter(todo => todo.id !== action.payload);
      state.todos = newTodos;
      saveLocal(state.todos);

    },
    editTodo: (state, action) => { 
      console.log("id:", action.payload.id, "newText:", action.payload.newText);
      const currentTodoIndex = state.todos.findIndex(todo => todo.id === action.payload.id);
      state.todos[currentTodoIndex].text = action.payload.newText;
      saveLocal(state.todos);
    },
  }
});

export const { setTodos, addTodo, completeTodo, deleteTodo, editTodo} = todosSlice.actions

export default todosSlice.reducer


