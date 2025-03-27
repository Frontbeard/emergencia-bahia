import React from 'react';
import Home from './pages/Home';
import Contact from './pages/Contact';
import { Routes, Route } from 'react-router-dom';
import Centers from './pages/Centers';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contacto" element={<Contact />} />
      <Route path="/centros" element={<Centers />} />
    </Routes>
  );
}

export default App;