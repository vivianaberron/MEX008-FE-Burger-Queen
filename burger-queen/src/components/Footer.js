import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Footer.css';
import { Button, Label, InputGroup, Input } from 'reactstrap';

class Footer extends React.Component {
    render () {
        return (
          <div className="Footer">
            <div className="Footer_header">
              <div>
                <Label>
                    <h4 className="text-center font-weight-blod">Observaciones</h4>
                </Label>       
              </div>
                <InputGroup 
                className="InputGroup">
                  <Input
                  type="text"
                  name="observaciones"
                  onChange={this.props.onChangeHandler}/></InputGroup> <br />
            </div>
         
            <Button className="btn_confirm_order">
              <Link id="link_confirm" to="/TablaComanda"> Confirmar</Link>

            </Button>
          </div>
        );
    }
}
export default Footer;