import React from 'react';
import Textips from '../components/textTips.js';
// import '../styles/textTips.css';

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
            <div className="textoCocina">
                 <div id="titulo"> 
                        <h2>Alistémonos D'Monium</h2>
                 </div>    
                {
                    this.state.tips.map((item, index) => <Textips key={index} id={`element${index}`} texto={item}/>)
                }  
            </div>
        )
    }
}

export default TipsCocina;