import React, { useState } from 'react';

import Todo from './Todo.jsx';

const TodoList = ({todos, setTodos}) => {
  const [filterStatus, setFilterStatus] = useState('all');

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

  return (
    <div className="todo-list-container">
      <ul className="todo-list">
        {todos.map(todo => (
          <Todo key={todo.id} todo={todo} deleteHandler={deleteHandler} completeHandler={completeHandler}/>
        ))}
      </ul>
    </div>
  );
}
 
export default TodoList;