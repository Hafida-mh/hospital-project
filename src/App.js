 import './App.css';
 import React from 'react'
 import Inscription from '../src/components/Inscription'
 import Connexion from './components/Connexion.js'
 import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
 } from "react-router-dom";

import Map from './components/Map'

function App() {
  return (
    <div className="App">

      <Router >
        <Switch>
          <Route exact path="/"> <Inscription /> </Route>
          <Route path="/connexion" > <Connexion /> </Route>
          <Route path="/map"> <Map /> </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
