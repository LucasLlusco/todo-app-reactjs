import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './home/HomePage';
import NewTodoPage from './new/NewTodoPage';
import EditTodoPage from './edit/EditTodoPage';

function App() {
  
  return (
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/new' component={NewTodoPage}/>
      <Route exact path='/edit/:id' component={EditTodoPage}/>
      <Route path='*'>
      <>Not Found</>
      </Route>
    </Switch>
  );
}

export default App;