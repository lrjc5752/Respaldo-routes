import React from 'react';
import Inicio from './components/Inicio';
import Base from './components/Base';
import {
  BrowserRouter as Router, // un alias para BrowserRouter
  Switch,
  Route,
  Link,
} from 'react-router-dom';

function AppReact() {
  return (
    <Router>    {/* componente principal o padre, puede se un <div> */} 
    <Link to= "/Inicio">Inicio</Link>
    <Link to="/">Base</Link>
      <Switch>  {/*es como un suiche en js  */}
        <Route exact path="/">
          <Base></Base>
         </Route>
         <Route path="/inicio/:id/:nombre/:edad">    {/*el ruteador con el path */}
                                        {/* las rutas pueden intercalarse entre dinamicas y estaticas*/}

          <Inicio></Inicio>
          </Route>
      </Switch> 
  </Router>
  );
}

export default AppReact;
