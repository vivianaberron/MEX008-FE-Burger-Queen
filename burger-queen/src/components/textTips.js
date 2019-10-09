import React from 'react';
import '../styles/textTips.css';


class Textips extends React.Component {
    
    render(){
        console.log(this.props);
        return(
            <div className="conteiner">
      
                    <div key={this.props.id} >
                        <div id="text">  
                            <label htmlFor={this.props.id}>{this.props.texto}</label>
                            <input id={this.props.id} type="checkbox" name="acepto" className="checkbox" />
                        </div>
                    </div> 
            </div>        
        );
    }
}
export default Textips;


