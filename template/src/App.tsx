import React from 'react';
import './global.css';
import { Routes, Route } from 'react-router-dom'
import { Home } from './components/home';

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home/ >}/>
      </Routes>
    </main>
  );
}

export default App;
