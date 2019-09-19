import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './login';//para logearse con firebase
import Layout from './Layout'; // para el siseño de nuestra pagina
import Button from './Button';
//import Home from '../Home'; //para la pagina principal
//prueba para ver sis si funciona


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Layout>
          <Route exact path="/Button" component={Button} />
        </Layout>
      </Switch>
    </BrowserRouter>
    // <div>
    //   <Button text = 'Servicio'/>
    // <Button text = 'Cocina'/>
    //</div>
  );
}
export default App;
