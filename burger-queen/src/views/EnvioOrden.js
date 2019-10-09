import React from 'react';

import Buttons from '../components/Buttons';
import "../styles/EnvioOrden.css";

import { Link } from 'react-router-dom';

class EnvioOrden extends React.Component {
    render() {
        return <div className="App">
            <div className="Envio_header">
                <div className="text-center">
                <p>Tu pedido se ha enviado exitosamente</p>
                </div>
               
                
            {/* <Notificacion className="text-center" content = "Tu pedido se ha enviado exitosamente" /> */}
            
        
            </div>
            
            <div>
            <Link to="/Sidebar">

            <Buttons text = "Continuar con la orden" />

            </Link>
            <Link to="/Home">
            <Buttons text = "Menu principal" />
            </Link>
            </div>
        </div>
    }
}

export default EnvioOrden;