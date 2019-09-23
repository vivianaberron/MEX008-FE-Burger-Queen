import React from 'react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

class Areas extends React.Component {
    render() {
        return <div>
            <Link to="/Home">
                <Button text = "Servicio" />
            </Link>
            <Button text = "Cocina" />
        </div>
    }
}

export default Areas