import React from 'react';
import Textips from '../components/textTips.js';
import next from '../img/next.png';
import { Link } from "react-router-dom";
import '../styles/textTips.css';

class ListaIngredientes extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            ingredientes: [
                "Alitas", 
                "Medallones",
                "Pan"
            ] 
        }    

    }

    render (){
     console.log(this.state.ingredientes);
        return (
            <div className="TipsCocina">
                   
                        <div id="titulo">
                            <h2>Mise in Place</h2>
                        </div>
                    <div className="textoCocina">

                        {
                            this.state.ingredientes.map((item,index) => <Textips key={index} id={`element${index}`} texto={item}/>)
                        }
                    </div>

                    <div className="Boton-siguiente">
                        <Link className="boton" to="/OrdenCocina">
                            <img className="next" src={next} alt="Boton siguiente"/>
                        </Link>
                    </div>
            </div>       
    )
}
};

export default ListaIngredientes



