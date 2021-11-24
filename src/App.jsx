import React from 'react';
import Usuarios from './components/Usuarios';
import {
    BrowserRouter as Router, // un alias para BrowserRouter
    Switch,
    Route,
    Link,
  } from 'react-router-dom';
  import Usuario from './components/Usuario';

function App() {
  return (
    <Router>
        <Link exact to="/">Usuarios</Link>
        <Switch>
            <Route exact path="/">
                <Usuarios></Usuarios>
            </Route>
            <Route path="/usuario/:id">
                <Usuario></Usuario>
            </Route>
        </Switch>
    </Router>

  );
}

export default App;
