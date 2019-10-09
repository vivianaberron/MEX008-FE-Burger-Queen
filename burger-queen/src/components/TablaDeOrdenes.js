import React from 'react';


class TablaDeOrdenes extends React.Component{
    render(){
        return(
            <div>
                <div className="TablaCocina">
                        <h4>{this.props.nameOrden}</h4>
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