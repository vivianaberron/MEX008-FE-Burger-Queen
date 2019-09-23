import React from 'react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

import '../components/styles/Areas.css';

class Areas extends React.Component {
    render() {

        return <div className="areas-container">
          
            <div className = "btn-areas">
                <Link to="/Stepper" >
                    <Button  text = "Servicio" />
                </Link>
            </div>
      
            <div className = "btn-areas">
                <Button text = "Cocina" />
            </div>

        </div>
    }
}

export default Areas