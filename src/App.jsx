import { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/home';
import './App.css';

function App() {
  return (
    <div className="fixed left-0 w-full bg-gray-900 text-white font-sans w-full">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
