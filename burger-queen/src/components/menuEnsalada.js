import React from 'react';
import '../styles/menuEnsalada.css';


class MenuEnsalada extends React.Component {
    render (){
        return (
            <div className="menuEnsalada">
                <h6> {this.props.name}  </h6> 
                   <p>{this.props.price}</p>
                   <p>{this.props.combo}</p>


            </div>
        )
    }
}

export default MenuEnsalada; 