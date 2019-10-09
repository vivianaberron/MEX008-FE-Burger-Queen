import React from 'react';
import Textips from '../components/textTips.js';
import { Link } from 'react-router-dom';
import next from '../img/next.png';
import '../styles/Limpieza.css'

class Limpieza extends React.Component{
    render (){
        return (
            <div className="Limpieza">
                <div className="Seccion_limpieza">
                    <h2 id="titulo">Limpieza</h2>

                    <Textips texto="Plancha"/>
                    <Textips texto="Área de Pan"/>
                    <Textips texto="Repisas"/>
                </div>

                <div className="Boton-siguiente">
                    <Link className="boton" to="/Requisiciones">
                        <img className="next" src={next} alt="Boton siguiente"/>
                    </Link>
                </div>

            </div>
        )
    }

}
export default Limpieza