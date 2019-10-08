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
                    <Buttons text = "Servicio" className="btn" color="warning" block/>
                </Link>
            </div>
      
            <div className = "btn-areas">
<<<<<<< HEAD
                <Link to= "/TipsCocina">
                    
                    <input list= "cocina"  className="selec" color="warning" size="sm" block />
                    <datalist id="cocina">
                        <option value="COCINA"/>   
                        <option value="Plancha"/>
                        <option value="Fría"/>
                        <option value="Pizza"/>
                        <option value="Bebidas"/>

                    </datalist>   
=======
            {/* <Buttons  className="btn btn-outline-secondary" text = "Cocina" /> */}

               <Link to="/TipsCocina">
                    <select name="Cocina"  className="btn-lg selec" color="warning">
                        <option value="Plancha">COCINA</option>
                        <option value="Plancha" >Plancha</option>
                        <option value="Fría">Fría</option>
                        <option value="Pizza">Pizza</option>
                        <option value="Bebidas">Bebidas</option>
                    </select>
>>>>>>> b1c2af2c952345dab18ad4b5dcc869bf7a2c0e12
                </Link>
                
                
            </div>    
        </div>
        )
    }
}

export default withRouter(Areas);