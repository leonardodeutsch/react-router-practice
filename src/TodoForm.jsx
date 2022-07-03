import React from 'react';

const TodoForm = ({input, setInput, todos, setTodos, setFilterStatus}) => {

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
    setFilterStatus('all');
  }

  return (
    <form className="m-3">
      <input className="outline outline-1 outline-slate-200 shadow-md px-2" type="text" placeholder="Enter your task" value={input} onChange={todoInputHandler}/>
      <button type="submit" onClick={inputSubmitHandler}>Add</button>
    </form>
  );
}
 
export default TodoForm;