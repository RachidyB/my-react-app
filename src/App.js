// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Login from './pages/Login';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/Product" element={<Products />} />
      </Routes>
    </Router>
  );
};

export default App;
