import React from 'react';
import Textips from '../components/textTips.js';
import next from '../img/next.png';
import { Link } from "react-router-dom";
import '../styles/TipsCocina.css';

class  TipsCocina extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            tips: [
                "Gorro o Paliacate",
                "Mandil",
                "Lavado de Manos"
            ]
        }
    }
    render (){
        console.log(this.state.tips);
        
        return( 
    
                <div className="Tips_Cocina">
                    
                        <div id="titulo"> 
                                <h2>Alistémonos D'Monium</h2>
                        </div>  
                    <div className="textoCocina">     
                        {
                            this.state.tips.map((item, index) => 
                            <Textips key={index} 
                            id={`element${index}`} 
                            texto={item}/>)
                        }  
                    </div>

                    <div className="Boton-siguiente">
                        <Link className="boton" to="/ListaIngredientes">
                            <img className="next" src={next} alt="Boton siguiente"/>
                        </Link>
                    </div>
                
                </div>   
        
        )
    }
}

export default TipsCocina;