import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Buttons from '../components/Buttons';
import { Link } from 'react-router-dom';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';



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
        <div className="areas-container">
          
            <div className = "btn-areas">
                <Link to="/Home" >
                    <Buttons  className="btn btn-outline-secondary" text = "Servicio" />
                </Link>
            </div>
      
            <div className = "btn-areas">
                    
               
                <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret color="warning" size="lg">  
                    COCINA 
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

export default Areas