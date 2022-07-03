import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './Navbar.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import TodoApp from './TodoApp.jsx';

const App = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-6xl text-orange-500 m-5 font-bold">React Practice Apps</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/todo" element={<TodoApp />} />
      </Routes>
    </div>
  );
}
 
export default App;
