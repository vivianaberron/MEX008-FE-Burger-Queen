import React from 'react';
import '../styles/Footer.css';
import { Button, Label, InputGroup, Input } from 'reactstrap';

class Footer extends React.Component {
    render () {
        return (
          <div className="Footer">
            <div className="Footer_header">
              <div className="observaciones">
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
            <Button 
            className="btn_confirm_order" 
            color="success" block
            onClick={this.props.confirmHandler}>
            Confirmar
            </Button>
          </div>
        );
    }
}
export default Footer;