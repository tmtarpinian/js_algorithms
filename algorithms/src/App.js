import React from 'react';
import {  NavLink } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
    <h1> There are many paths you could choose</h1>
    <NavLink to='/sorting-exercises' exact> Sort Some Arrays!</NavLink>
    </div>
  );
}

export default App;
