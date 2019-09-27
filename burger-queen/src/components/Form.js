import React from 'react';

class Form extends React.Component {
    state = {
        name: '',
    }
    onSubmit = e => {
        console.log('Holi');
        e.preventDefault();
        localStorage.setItem('clientes', JSON.stringify(this.state));
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
                <label>Orden a nombre de:</label>
                <br />
                <input
                name="name"
                type="text" 
                placeholder="Nombre"
                value={this.state.name} 
                onChange={this.onChange}/>
                <br />
                <br />
                <button 
                type="submit"
                onSubmit={this.onSubmit}>
                    Registrar
                </button>
            </form>
        )
    }
}

export default Form;