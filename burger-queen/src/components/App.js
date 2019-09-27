import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './login';//para logearse con firebase
import Layout from '../views/Layout'; // para el siseño de nuestra pagina
import Areas from '../views/Areas';
import Tips from '../views/Tips';
import FlowStepper from './Stepper';
// import ModalApp.js from './modalApp';
import Sidebar from './Sidebar';

import Home from '../views/Home';
// import Menu from '../views/Menu';



function App() {
  return (
    
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Layout>
          <Route path="/Areas" component={Areas} />
          <Route path="/Tips" component={Tips} />
          <Route path="/Home" component={Home} />
          <Route path="/Stepper" component={FlowStepper} />
          <Route path="/Menu" component={Sidebar} />
        </Layout>
      </Switch>
    </BrowserRouter>

  );
}
export default App;


