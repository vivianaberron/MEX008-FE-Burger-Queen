import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Buttons from '../components/Buttons';
import { Link, withRouter } from 'react-router-dom';





//import '../components/styles/Areas.css';

class Areas extends React.Component {
    
    // onClick = () => {
    //     this.props.history.push('/TipsCocina');
    // }

    render() {

        return (
        <div className="areas-container">
          
            <div className = "btn-areas">
                <Link to="/Home" >
                    <Buttons  className="btn btn-outline-secondary" text = "Servicio" />
                </Link>
            </div>
      
            <div className = "btn-areas">
            {/* <Buttons  className="btn btn-outline-secondary" text = "Cocina" /> */}

               
                    <select name="Cocina"  className="btn-lg selec" color="warning">
                        <option value="Plancha">COCINA</option>
                        <option value="Plancha" >Plancha</option>
                        <option value="Fría">Fría</option>
                        <option value="Pizza">Pizza</option>
                        <option value="Bebidas">Bebidas</option>
                    </select>
                
                
            </div>    
        </div>
        )
    }
}

export default withRouter(Areas);