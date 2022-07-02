import React, { useState, useEffect } from 'react';

import TodoForm from './TodoForm.jsx';
import TodoList from './TodoList';

const TodoApp = () => {

  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);


  return (
    <div className="todo-app">
      <h1>My ToDo List!</h1>
      <TodoForm input={input} setInput={setInput} todos={todos} setTodos={setTodos}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}
 
export default TodoApp;