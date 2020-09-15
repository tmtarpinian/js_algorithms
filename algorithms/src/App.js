import React from 'react';
import {  NavLink } from 'react-router-dom';
import './App.css';
import TwoEgg from './Components/twoEgg';

function App() {
  return (
    <div>
    <h1> There are many paths you could choose</h1>
    <NavLink to='/sorting-exercises' exact> Sort Some Arrays!</NavLink>
    <TwoEgg />
    </div>
  );
}

export default App;
