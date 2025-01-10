import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar1 from './Navbar1';

function App() {
  return (
    <BrowserRouter>
      <Navbar1 />
    </BrowserRouter>
  );
}

export default App;
