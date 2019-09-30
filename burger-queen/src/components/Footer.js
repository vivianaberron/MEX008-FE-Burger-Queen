import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Footer.css';
import { Button, Label, Input } from 'reactstrap';

class Footer extends React.Component {
    render () {
        return (
          <div className="Footer">
            <div>
              <div>
                <Label className="text">
                    <h4 className="font-weight-blod">Observaciones</h4></Label>
              </div>
              <div className="input_box">
                <Input className="input" type="text"></Input>
              </div>
            </div>
          <div className="btn_box">
            <Button className="btn" color="warning" block>
              <Link> Confirmar</Link>
            </Button>
            </div>
            
           
          </div>
        );
    }
}
export default Footer;