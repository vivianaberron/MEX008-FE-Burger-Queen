import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Buttons from '../components/Buttons';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
=======
import { Link, withRouter } from 'react-router-dom';


>>>>>>> b1c2af2c952345dab18ad4b5dcc869bf7a2c0e12



//import '../components/styles/Areas.css';

class Areas extends React.Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false
        };
      }
    
<<<<<<< HEAD
      toggle() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
      }
=======
    // onClick = () => {
    //     this.props.history.push('/TipsCocina');
    // }
>>>>>>> b1c2af2c952345dab18ad4b5dcc869bf7a2c0e12

    render() {

        return (
        <div className="areas-container">
          
            <div className = "btn-areas">
                <Link to="/Home" >
                    <Buttons  className="btn btn-outline-secondary" text = "Servicio" />
                </Link>
            </div>
      
            <div className = "btn-areas">
<<<<<<< HEAD
                    
               
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
=======
            {/* <Buttons  className="btn btn-outline-secondary" text = "Cocina" /> */}

               <Link to="/TipsCocina">
                    <select name="Cocina"  className="btn-lg selec" color="warning">
                        <option value="Plancha">COCINA</option>
                        <option value="Plancha" >Plancha</option>
                        <option value="Fría">Fría</option>
                        <option value="Pizza">Pizza</option>
                        <option value="Bebidas">Bebidas</option>
                    </select>
                </Link>
                
                
            </div>    
>>>>>>> b1c2af2c952345dab18ad4b5dcc869bf7a2c0e12
        </div>
        );
    }
}

export default withRouter(Areas);