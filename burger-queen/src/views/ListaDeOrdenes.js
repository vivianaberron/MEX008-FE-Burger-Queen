import React from 'react';
import TablaDeOrdenes from '../components/TablaDeOrdenes.js';
import '../styles/Cocina.css';
import { Link } from 'react-router-dom';
import next from '../img/next.png';


class ListaDeOrdenes extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            ordenes: [
                "Gula", 
                "Soberbia",
                "Banana Limbo"
            ] 
        }    

    }

    render (){
    //  console.log(this.state.ingredientes);
        return (
        <div className="conteiner">
                <div id="titulo">
                        <h2>ORDENES</h2>
                </div>
                <div className="conteinerOrden"> 
                        <div className="ingredientes">
                        
                            <div className="tabla">
                                <div className="comensal">
                                    <TablaDeOrdenes nameOrden="Fabiola"/>
                                </div>
                                <div className="orden">
                                    <TablaDeOrdenes cantidad="1"/>
                                    <TablaDeOrdenes orden="Gula, Soberbia"/>
                                </div>
                            </div>

                             <div className="tiempo">
                                <TablaDeOrdenes time="7 min"/>  
                             </div>
                    
                         </div>

                </div>           
                <div className="Boton-siguiente">
                    <Link className="boton" to="/Limpieza">
                            <img className="next" src={next} alt="Boton siguiente"/>
                    </Link>
                </div> 
        </div>      
    )
  }
};

export default ListaDeOrdenes