import React from 'react';

class Form extends React.Component {
    state = {
        name: '',
    }
    onSubmit = e => {
        console.log(this.state);
        e.preventDefault();
    }
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value})
    }
    render(){
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
                <button type="submit">
                    Registrar
                </button>
            </form>
        )
    }
}

export default Form;