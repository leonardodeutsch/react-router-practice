import React from 'react';

const TodoForm = ({input, setInput, todos, setTodos}) => {

  const todoInputHandler = (e) => {
    setInput(e.target.value);
  }

  const inputSubmitHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, {
      text: input,
      id: Math.floor(Math.random() * 10000),
      completed: false
    }]);
    setInput('');
  }

  return (
    <form className="todo-form">
      <input type="text" placeholder="Enter your task" value={input} onChange={todoInputHandler}/>
      <button type="submit" onClick={inputSubmitHandler}>Add</button>
    </form>
  );
}
 
export default TodoForm;