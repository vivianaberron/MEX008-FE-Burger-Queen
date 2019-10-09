import React from 'react';
import { Link } from 'react-router-dom';
import next from '../img/next.png';
import '../styles/tabla.css';

class OrdenCocina extends React.Component {
    constructor(props){
        super(props)
    
        this.state = {
            name: "",
            number:0,
            cantidad: 0,
            elemento: ""
        }
    }
        // componentDidMount(){
        //     const { name, number } = JSON.parse(localStorage.getItem('clientes'));
        //     const { cantidad, elemento} = JSON.parse(localStorage.getItem('ordenes'));
        //     this.setState({name, number,cantidad, elemento})
        //     console.log(this.state);
            
        //  }
    
    render () {
        return( 
            <div>    
                {/* // state = JSON.parse(localStorage.getItem('clientes')); */}
                
                
                    <div className="tablaCocina">
                        {/* <h1>{this.state.name}</h1> */}
                        <h1>Orden de: {this.props.name}</h1>


                        <table className="Tabla">
                            <tbody>
                                <tr>
                                <td><strong>Cantidad</strong></td>
                                <td><strong>Pedido</strong></td>
                                <td><strong>Observaciones</strong></td>
                                </tr>

                                <tr>
                                <td>{this.props.cantidad}</td>
                                <td>{this.props.elemento}</td>
                                <td>Sin Queso </td>
                                </tr>

                                <tr>
                                <td>1</td>
                                <td>Soberbia</td>
                                <td>Sin Cebolla</td>
                                </tr>

                                <tr>
                                <td>2</td>
                                <td>Banana Limbo</td>
                                <td>---</td>
                                </tr>
                            </tbody>
                        </table>
                    
                    
                    </div>


                    <div className="Boton-siguiente">
                        <Link className="boton" to="/ListaDeOrdenes">
                            <img className="next" src={next} alt="Boton siguiente"/>
                        </Link>
                    </div>

            </div>        
        )
    }
}

export default OrdenCocina