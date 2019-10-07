import React from 'react';
import Buttons from '../components/Buttons';
import { Link } from 'react-router-dom';

class TablaComanda extends React.Component {
    //state = JSON.parse(localStorage.getItem('clientes'));
    constructor(props){
        super(props)
    
    this.state = {
        name: "",
        number:0,
        cantidad: 0,
        elemento: "",
        precio: 0,
    }
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
                

                <div className="tablaCocina">
                        {/* <h1>{this.state.name}</h1> */}
                        <h1>Orden de: {this.state.name}</h1>
                        <h1>Mesa: {this.state.number}</h1>



                        <table className="Tabla">
                            <tbody>
                                <tr>
                                <td><strong>Cantidad</strong></td>
                                <td><strong>Pedido</strong></td>
                                <td><strong>Observaciones</strong></td>
                                <td><strong>Precio</strong></td>
                                </tr>

                                <tr>
                                <td>{this.state.cantidad}</td>
                                <td>{this.state.elemento}</td>
                                <td>Sin Queso </td>
                                <td>${this.state.precio}</td>

                                </tr>
                                {/*
                                <tr>
                                <td>1</td>
                                <td>Sobervia</td>
                                <td>Sin Cebolla</td>
                                </tr>

                                <tr>
                                <td>2</td>
                                <td>Banana Limbo</td>
                                <td>---</td>
                                </tr>
                                */}
                            </tbody>
                        </table>
                    
                    
                    </div>

                <Link to="/EnvioOrden">
                <Buttons text="Enviar a Cocina" />

                </Link>
            </div>
        );
    }
}
export default TablaComanda;