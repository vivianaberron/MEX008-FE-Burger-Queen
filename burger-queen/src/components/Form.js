import React from 'react';
import { withRouter } from 'react-router-dom';

import { InputGroup, Input, Label, Button } from 'reactstrap';
import '../styles/Form.css';

class Form extends React.Component {
    state = {
        name: '',
       number: '',
    }
    onSubmit = e => {
        console.log('Holi');
        e.preventDefault();
        console.log(this.state);
        localStorage.setItem('clientes', JSON.stringify(this.state));
        this.props.history.push('/Sidebar');
        //console.log(JSON.parse(localStorage.getItem('clientes')));
        //this.props.agregarClientes(this.state.name);
    }
    onChange = e => {
        console.log(e.target);
        this.setState({
            [e.target.name]: e.target.value},
            this.setState({[e.target.type]: e.target.value})
        )}
    render(){
        //console.log(this.props);
        
        return(
            <form onSubmit={this.onSubmit}>
                <Label className="text-center">
                <h4>
                <span className="font-weight-blod"></span>
                </h4></Label>
                <br />
               
                <InputGroup className="InputGroup" size="lg">
                    <Input

                        name="name"
                        type="text" 
                        placeholder="Nombre"
                        value={this.state.name} 
                        onChange={this.onChange}/>
                        <Input
                        type="number" 
                        placeholder="Mesa"
                        value={this.state.type} 
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