import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './login';//para logearse con firebase
import Layout from './Layout'; // para el siseño de nuestra pagina
//import Home from '../Home'; //para la pagina principal

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Login} />
        </Switch>
      </Layout>
    </BrowserRouter> 
  );
}
export default App;
