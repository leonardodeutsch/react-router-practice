import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="my-5">
      <ul className="flex gap-3">
        <li className="text-2xl shadow-lg px-4 py-2 bg-blue-400 hover:bg-blue-500 hover:scale-105  text-white font-medium rounded-2xl">
          <Link to="/">Home</Link>
        </li>
        <li className="text-2xl shadow-lg px-4 py-2 bg-blue-400 hover:bg-blue-500 hover:scale-105  text-white font-medium rounded-2xl">
          <Link to="/about">About</Link>
        </li>
        <li className="text-2xl shadow-lg px-4 py-2 bg-blue-400 hover:bg-blue-500 hover:scale-105  text-white font-medium rounded-2xl">
          <Link to="/todo">Todo App</Link>
        </li>
        <li className="text-2xl shadow-lg px-4 py-2 bg-blue-400 hover:bg-blue-500 hover:scale-105  text-white font-medium rounded-2xl">
          <Link to="/championsearch">Champion Search</Link>
        </li>
      </ul>
    </nav>
  );
}
 
export default Navbar;