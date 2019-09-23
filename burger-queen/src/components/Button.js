import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/Button.css';

class Button extends React.Component {
    render() {
        return (
            <div className="Areas">
                <button className="btn" color="btn-outline-secondary btn-lg" block>
                    {this.props.text}
                </button>
            </div>
        );
    }
}

export default Button;



