import React, { useState } from 'react';

import Todo from './Todo.jsx';

const TodoList = ({todos, setTodos, filterStatus, setFilterStatus}) => {

  const deleteHandler = (currentTodo) => {
    setTodos(todos.filter(todo => todo.id !== currentTodo.id));
  }

  const completeHandler = (currentTodo) => {
    setTodos(todos.map(item => {
      if (item.id === currentTodo.id) {
        return {...item, completed: !item.completed};
      } else {
        return item;
      }
    }))
  }

  const selectFilterHandler = (e) => {
    setFilterStatus(e.target.value);
  }

  const filterHandler = (todos) => {
    switch(filterStatus) {
      case 'all':
        return todos;
      case 'complete':
        return todos.filter(todo => todo.completed === true);
      case 'incomplete':
        return todos.filter(todo => todo.completed === false);
      default:
        console.log('there is no filter');
    }
  }

  return (
    <div className="todo-list-container">
      <select name="" id="" onChange={selectFilterHandler} value={filterStatus}>
        <option value="all">All</option>
        <option value="complete">Complete</option>
        <option value="incomplete">Incomplete</option>
      </select>
      <ul className="todo-list">
        {filterHandler(todos)?.map(todo => (
          <Todo key={todo.id} todo={todo} deleteHandler={deleteHandler} completeHandler={completeHandler}/>
        ))}
      </ul>
    </div>
  );
}
 
export default TodoList;