import React from 'react';
import './styles/login.css';
import logodemonium from '../img/logodemonium.png';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'; // componente de botones de red social

/*import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebase';*/

//comienza diseño con bootstrap
import { GoogleLoginButton } from 'react-social-login-buttons';
import { FacebookLoginButton } from 'react-social-login-buttons';

class Login extends React.Component {
  render() {
  return ( 
      <Form className="App">
        <div><img className="login_header" src={logodemonium} alt="Logo de la compañia"/></div>
        <h1>
          <span className="font-weight-blod">D'Monium</span>
        </h1>
        <h2 className="text-center">Bienvenid@</h2>
        <FormGroup>
          <Label>Número Celular</Label>
          <Input type="number" placeholder="Ingresa tu nuero de telefono"></Input>
        </FormGroup>
        <Button className="btn-lg btn-warning btn-block">Login</Button>
          <div className="text-center pt-3">
             Ó  logeate con tus Redes Sociales 
          </div>
        <div>
          <GoogleLoginButton className="mt-3 mb-3"/>
        </div>
        <FacebookLoginButton className="mt-3 mb-3"/>
      </Form>
   );
 }
}
export default Login;

//comienza los componentes para el logeo con firebase
/*const firebaseApp = firebase.initializaApp(firebaseConfig);
class Login extends Component {
    render () {
        const { user, singOut, signInWithGoogle } = this.props;
        return ( 
            <div>
                {
                    user ?
                    <p>Bienvenido, {user.displayName}</p>
                    : <p>Por favor ingresa</p>  
                }
                {
                    user 
                    ? <button onClick={singOut}>Sign out</button>
                    : <button onClick={signInWithGoogle}>Sing in with Google</button>
                }
            </div>
        );
    }
}
const firebaseAppAuth = firebaseApp.auth();
const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(Login);*/