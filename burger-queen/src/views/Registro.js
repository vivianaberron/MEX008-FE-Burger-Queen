import React from 'react';
import Form from '../components/Form';


class Registro extends React.Component {
    //state = {
    //     clients : [],
    // }
    // handleSubmit = client => {
    //     this.setState({ characters: [...this.state.clients, client]})
    // }
    
    render() {
        return <div>
            <Form agregarClientes={this.agregarClientes}/>
        </div>
    }
}

export default Registro;