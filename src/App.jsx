import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home.jsx';
import About from './About.jsx';
import TodoApp from './TodoApp.jsx';

const App = () => {
  return (
    <div className="app">
      <h1>Hello</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/todo" element={<TodoApp />} />
      </Routes>
    </div>
  );
}
 
export default App;
