import React from 'react';
import Buttons from '../components/Buttons';
import { Link } from 'react-router-dom';

class TablaComanda extends React.Component {
    state = JSON.parse(localStorage.getItem('clientes'));

    render() {
        //console.log(this.state);
        //this.props.agregarClientes(this.state.name);
        return(
            <div>
                <h1>Confirma la orden de:</h1>
               

                <h1>{this.state.name}</h1>
                <h1>{this.state.number}</h1>
                <Link to="/EnvioOrden">
                <Buttons text="Enviar a Cocina" />

                </Link>
            </div>
        );
    }
}
export default TablaComanda;