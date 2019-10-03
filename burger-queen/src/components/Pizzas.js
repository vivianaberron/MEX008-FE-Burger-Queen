import React from 'react';

class Ensaladas extends React.Component {
    render(){
        return(
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Mediana</td>
                            <td>Grande</td>
                            <td>Familiar</td>

                        </tr>
                        <tr>
                        <td className="cant">
                            <Input type="number" placeholder="Cant."></Input>
                        </td>
                        <td className="name">
                            {this.props.name}
                        </td>
                        <td className="price">
                            <Input type="checkbox"/><label>{this.props.priceMed}</label>
                        </td>
                        <td className="combo">
                            <Input type="checkbox"/><label>{this.props.priceGran}</label>
                        </td>
                        <td className="combo">
                            <Input type="checkbox"/><label>{this.props.priceFam}</label>
                        </td>
                        
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}