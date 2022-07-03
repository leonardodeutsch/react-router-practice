import React, { useState, useEffect } from 'react';

import TodoForm from './TodoForm.jsx';
import TodoList from './TodoList';

const TodoApp = () => {

  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');


  return (
    <div className="todo-app">
      <h2 className="m-3 font-medium text-3xl text-center">My ToDo List!</h2>
      <TodoForm input={input} setInput={setInput} todos={todos} setTodos={setTodos} setFilterStatus={setFilterStatus}/>
      <TodoList todos={todos} setTodos={setTodos} filterStatus={filterStatus} setFilterStatus={setFilterStatus} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
    </div>
  );
}
 
export default TodoApp;