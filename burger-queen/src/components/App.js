import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './login';//para logearse con firebase

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Layout>
    </BrowserRouter> 
  );
}
export default App;
