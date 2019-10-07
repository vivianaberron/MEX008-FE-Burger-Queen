import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Buttons from '../components/Buttons';
import { Link } from 'react-router-dom';



//import '../components/styles/Areas.css';

class Areas extends React.Component {
    render() {

        return <div className="areas-container">
          
            <div className = "btn-areas">
                <Link to="/Home" >
                    <Buttons text = "Servicio" className="btn" color="warning" block/>
                </Link>
            </div>
      
            <div className = "btn-areas">
                <Buttons text = "Cocina" />
            </div>

        </div>
    }
}

export default Areas