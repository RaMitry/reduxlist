import React from 'react';
import TodoList from './todo-list/TodoList';
import NewForm from './todo-list/NewForm';

const App = () => (
  <div className="app-container">
    <h2>Todo List:</h2>
    <TodoList />
    <NewForm />
  </div>
);

export default App
