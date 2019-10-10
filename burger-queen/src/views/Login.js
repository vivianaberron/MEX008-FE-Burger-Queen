import React from 'react';
import '../styles/login.css';
import logodemonium from '../img/logodemonium.png';
import { Form, FormGroup, Label, Input } from 'reactstrap'; // componente de botones de red social
import {  Link  } from "react-router-dom";



class Login extends React.Component {
//comienzo con la conexion con firebase
handChange= e =>{
  console.log({
    no_empleado:e.target.no_empleado,
  });
};

handleClick = e => {
  console.log('Button was clicked');
};
handleSubmit = e => {
  e.preventDefault ();
  console.log('Form was submitted');
};

  render() {
  return ( 
    <div className="login-container">
      <Form onSubmit={this.handleSubmit} className="login-form-login">
        <div>
          <img className="login_header" src={logodemonium} alt="Logo de la compañia"/>
        </div>
        <h1 className="text-center_login">Inicia sesión</h1>
        <h2>
          <span className="font-weight-blod">Ingresa tu No. D'Monium</span>
        </h2>
        <FormGroup className="form">
          <Label className="text-center2"></Label>
          <Input className="input form-control" type="password" placeholder="Ingresa tu número de empleado"></Input>
        </FormGroup>
        <Link to="/Areas" className="btn btn-outline-login"color="success">
          <p className="link"> Iniciar </p>
        </Link>
      </Form>
    </div>
   );
 }
}
export default Login;

