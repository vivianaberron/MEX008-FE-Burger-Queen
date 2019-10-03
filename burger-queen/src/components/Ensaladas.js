import React from 'react';

class Ensaladas extends React.Component{
    render(){
        return(
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Precio</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Precio</td>
                        </tr>
                        <td className="cant">
                            <Input type="number" placeholder="Cant."></Input>
                        </td>
                        <td className="name">
                            {this.props.name}
                        </td>
                        <td className="price">
                            {this.props.price}
                        </td>
                        
                    </tbody>
                </table>
            </div>
        )
    }
}