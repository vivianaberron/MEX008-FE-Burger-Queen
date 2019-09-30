import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Label, Input } from 'reactstrap'; 

class Form extends React.Component {
    state = {
        name: '',
    }
    onSubmit = e => {
        console.log('Holi');
        e.preventDefault();
        localStorage.setItem('clientes', JSON.stringify(this.state));
        this.props.history.push('/Menu');
        //console.log(JSON.parse(localStorage.getItem('clientes')));
        //this.props.agregarClientes(this.state.name);
    }
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value})
    }
    render(){
        //console.log(this.props);
        
        return(
            <form onSubmit={this.onSubmit}>
                <Label className="text-center">Orden a nombre de:</Label>
                <br />
                <Input className="input"
                name="name"
                type="text" 
                placeholder="Nombre"
                value={this.state.name} 
                onChange={this.onChange}></Input>
                <br />
                <br />
                
                    <Button className="btn-lg btn-warning btn-block" 
                        type="submit"
                        onSubmit={this.onSubmit}>
                          Registrar
                    </Button>
                
            </form>
        )
    }
}

export default withRouter(Form);