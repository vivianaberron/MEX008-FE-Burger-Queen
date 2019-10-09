import React from 'react';
import Notificacion from '../components/Notificacion';
import Buttons from '../components/Buttons';
import "../styles/EnvioOrden.css";
import tick from '../img/tick.png';
import { Link } from 'react-router-dom';

class EnvioOrden extends React.Component {
    render() {
        return <div className="App">
            <div className="Envio_header">
            <Notificacion className="text-center" content = "Tu pedido se ha enviado exitosamente" />
            <div id="tick_container">
                <img id="tick_img" src={tick} alt="Envio correcto"></img>
            </div>
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