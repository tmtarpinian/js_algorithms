import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import SortingArray from './Components/SortingArrays';
import TwoEgg from './Components/twoEgg';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <Route exact path="/" component={App} />
    <Route exact path="/sorting-exercises" component={SortingArray} />
    <Route exact path="/two-egg" component={TwoEgg} />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
