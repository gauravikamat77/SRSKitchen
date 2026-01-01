import './App.css';
import React from 'react';
import Header from './Header';
import Menu from './Menu';
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import Contact from './Contact';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
