import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Buttons from '../components/Buttons';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import '../styles/Areas.css';


import { Link, withRouter } from 'react-router-dom';






//import '../components/styles/Areas.css';

class Areas extends React.Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false
        };
      }

      toggle() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
      }


    render() {

        return (
        <div className="Areas">
            <div className="Areas_hero"></div>
            <div className = "Areas_link">
                <Link to="/Home" >
                    <Buttons id="btn_areas" text="Servicio" className="btn btn-outline" color="success" block/>
                </Link>
            </div>

            <div className= "Areas_container">
                <ButtonDropdown className="Areas_Dropdown" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret className="btn btn-outline" color="success" size="lg">  
                    Cocina 

                </DropdownToggle>
                    <DropdownMenu>
                    <DropdownItem header>Cocina</DropdownItem>
                    <Link to="/TipsCocina">    
                        <DropdownItem >Plancha</DropdownItem>
                    </Link>
                    <DropdownItem >Fría</DropdownItem>
                    <DropdownItem>Pizza</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Bebidas</DropdownItem>
                    </DropdownMenu>
                </ButtonDropdown>
                </div>
        </div>
        ); 

    }
}
export default withRouter(Areas);