import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import Home from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}>
          </Route>
          <Route path="/login" component={LoginPage}>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
