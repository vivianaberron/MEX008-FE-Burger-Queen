import React from 'react';
import Textips from '../components/textTips.js'

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
    
            <div className="ingredientes">
                <div id="titulo">
                    <h2>Mise in Place</h2>
                </div>
                {
                    this.state.ingredientes.map((item,index) => <Textips key={index} id={`element${index}`} texto={item}/>)
                }
            </div>
    )
}
};

export default ListaIngredientes



