import React from 'react';
import { withRouter } from 'react-router-dom';

import { InputGroup, Input, Button } from 'reactstrap';
import '../styles/Form.css';

class Form extends React.Component {
    state = {
        name: '',
       number: '',
    }
    onSubmit = e => {
        e.preventDefault();
        localStorage.setItem('clientes', JSON.stringify(this.state));
        this.props.history.push('/Sidebar');
        //console.log(JSON.parse(localStorage.getItem('clientes')));
        //this.props.agregarClientes(this.state.name);
    }
    onChange = e => {
        console.log(e.target.name);
        this.setState({
            [e.target.name]: e.target.value,
            //[e.target.number]: e.target.value
        })
    }
    render(){
        //console.log(this.props);
        
        return(
            <form onSubmit={this.onSubmit}>
               
                <InputGroup className="InputGroup" size="lg">
                    <Input
                        name="name"
                        type="text"
                        placeholder="Nombre"
                        value={this.state.name} 
                        onChange={this.onChange}/>
                    <Input
                        name="number"
                        type="number" 
                        placeholder="Mesa"
                        value={this.state.number} 
                        onChange={this.onChange}/>

                </InputGroup>
                <br />
                <br />
                    <Button className="button"
                         size="lg"
                        color="warning" 
                        type="submit"
                        onSubmit={this.onSubmit} block>
                          Registrar
                    </Button>
             
            </form>
        )
    }
}

export default withRouter(Form);