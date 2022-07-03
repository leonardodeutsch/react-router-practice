import React from 'react';

const Todo = ({todo, deleteHandler, completeHandler}) => {
  
  return (
    <li className="todo" style={{textDecoration: todo.completed ? 'line-through' : '' }}>
      {todo.text}
      <button className="remove-todo-btn" onClick={() => deleteHandler(todo)}>X</button>
      <button className="completed-todo-btn" onClick={() => completeHandler(todo)}>Complete</button>
    </li>
  );
}
 
export default Todo;