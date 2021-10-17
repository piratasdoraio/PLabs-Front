import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import Home from './pages/HomePage';
import Quadros from './pages/Quadros';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={LoginPage} />
          <Route path="/quadros" component={Quadros} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
