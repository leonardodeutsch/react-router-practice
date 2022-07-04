import React from 'react';

import Todo from './Todo.jsx';

const TodoList = ({todos, setTodos, filterStatus, setFilterStatus, searchTerm, setSearchTerm}) => {

  const deleteHandler = (currentTodo) => {
    setTodos(todos.filter(todo => todo.id !== currentTodo.id));
  }

  const completeHandler = (currentTodo) => {
    setTodos(todos.map(item => {
      if (item.id !== currentTodo.id) return item;
      return {...item, completed: !item.completed};
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

  const inputSearchHandler = (e) => {
    setSearchTerm(e.target.value);
  }

  const searchTermHandler = (todos) => {
    if (searchTerm === '') return todos;
    return todos.filter(todo => todo.text.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0);
  }

  return (
    <div className="todo-list-container">
      <input classtype="text" className="search-term outline outline-1 outline-slate-200 shadow-md px-2" placeholder="search for a task" onChange={inputSearchHandler}/>
      <select className="search-term outline outline-1 outline-slate-200 shadow-md px-2" name="" id="" onChange={selectFilterHandler} value={filterStatus}>
        <option value="all">All</option>
        <option value="complete">Complete</option>
        <option value="incomplete">Incomplete</option>
      </select>
      <ul className="todo-list">
        {searchTermHandler(filterHandler(todos)).map(todo => (
          <Todo key={todo.id} todo={todo} deleteHandler={deleteHandler} completeHandler={completeHandler}/>
        ))}
      </ul>
    </div>
  );
}
 
export default TodoList;