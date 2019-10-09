import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import Layout from '../views/Layout';

import Login from './Login';
//import Tips from '../views/Tips';


import Areas from '../views/Areas';
import Home from '../views/Home';
import Registro from '../views/Registro';
import Sidebar from './Sidebar';
import Menu from '../views/Menu';
import TablaComanda from '../views/TablaComanda';
import EnvioOrden from '../views/EnvioOrden';
import Promo from '../views/Promo';

import IfOffLine from './ifOffline';





import  TipsCocina from '../views/TipsCocina';
import Limpieza from '../views/Limpieza';
import Requisiciones from  '../views/Requisicion';
import ListaIngredientes from '../views/ListaIngredientes';
import OrdenCocina from '../views/OrdenCocina';
import ListaDeOrdenes from '../views/ListaDeOrdenes';


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <header>
        <IfOffLine>offLine</IfOffLine>
        </header>     
      <Switch>
        <Route exact path="/" component={Login} />
        <Layout> 
          <Route path="/Areas" component={Areas} />
          <Route path="/Home" component={Home} />
          <Route path="/Menu" component={Menu} />
          <Route path="/Sidebar" component={Sidebar} />


          <Route path="/Registro" component={Registro} />
          <Route path="/EnvioOrden" component={EnvioOrden} />
          <Route path="/TablaComanda" component={TablaComanda} />

          <Route path="/Promo" component={Promo} />

          <Route path="/TipsCocina" component={TipsCocina} />
          <Route path="/Limpieza" component={Limpieza} />
          <Route path="/Requisiciones" component={Requisiciones} />
          <Route path="/ListaIngredientes"  component={ListaIngredientes} />
          <Route path="/OrdenCocina" component={OrdenCocina}/>
          <Route path="/ListaDeOrdenes" component={ListaDeOrdenes}/>
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}
export default App;


