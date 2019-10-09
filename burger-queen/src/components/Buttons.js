import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/Button.css';
import { Button } from 'reactstrap';


class Buttons extends React.Component {
    render() {
        return (
            <div className="Buttons_Areas">
                <Button className="btn btn-outline" color="success" block>
                    {this.props.text}
                </Button>
            </div>
        );
    }
}

export default Buttons;



