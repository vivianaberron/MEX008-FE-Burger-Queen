import React from 'react';
import Buttons from '../components/Buttons';
import { Link } from 'react-router-dom';

class TablaComanda extends React.Component {
    //state = JSON.parse(localStorage.getItem('clientes'));
    state = {
        name: "",
        number:0,
        cantidad: 0,
        elemento: "",
        precio: 0,
    }

    componentDidMount(){
        const { name, number} = JSON.parse(localStorage.getItem('clientes'));
        const {cantidad, elemento, precio} = JSON.parse(localStorage.getItem('ordenes'));
        this.setState({name, number,cantidad, elemento, precio})
     }

    render() {
        //console.log(this.state);
        //this.props.agregarClientes(this.state.name);
        return(
            <div>
                <h1>Confirma la orden de:</h1>
               

                <h1>{this.state.name}</h1>
                <h1>{this.state.number}</h1>
                <h1>{this.state.cantidad}</h1>
                <h1>{this.state.elemento}</h1>
                <h1>${this.state.precio}</h1>

                <Link to="/EnvioOrden">
                <Buttons text="Enviar a Cocina" />

                </Link>
            </div>
        );
    }
}
export default TablaComanda;