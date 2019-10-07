import React from 'react';


class TablaDeOrdenes extends React.Component{
    render(){
        return(
            <div>
                <div className="TablaCocina">
                        <h2>{this.props.nameOrden}</h2>
                        <p>{this.props.cantidad}</p>
                        <p>{this.props.orden}</p>
                    
                </div>
                    
                <div className="Tiempo">  
                        <label>{this.props.time}</label>
                </div>

            </div>   
        ) 
    }
}
export default TablaDeOrdenes