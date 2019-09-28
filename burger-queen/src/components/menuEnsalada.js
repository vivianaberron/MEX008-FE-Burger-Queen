import React from 'react';
import '../styles/menuEnsalada.css';


class MenuEnsalada extends React.Component {
    render (){
        return (
            <div>
                <h6> {this.props.texto}  </h6> 
                   <p>{this.props.text1}</p>

            </div>
        )
    }
}

export default MenuEnsalada; 