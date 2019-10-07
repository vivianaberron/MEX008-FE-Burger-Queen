import React from 'react';
import { Input } from 'reactstrap';

class Pizzas extends React.Component {
    render(){
        return(
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>M</td>
                            <td>G</td>
                            <td>F</td>

                        </tr>
                        <tr>
                        <td className="cant">
                            <Input type="number" placeholder="0"></Input>
                        </td>
                        <td className="name">
                            {this.props.name}
                        </td>
                        <td className="price-med">
                            <Input type="checkbox"/><label>{this.props.priceMed}</label>
                        </td>
                        <td className="price-gran">
                            <Input type="checkbox"/><label>{this.props.priceGran}</label>
                        </td>
                        <td className="price-fam">
                            <Input type="checkbox"/><label>{this.props.priceFam}</label>
                        </td>
                        <td className="add">
                            <i className="fas fa-plus-square" onClick={this.props.onClick}></i>
                        </td>
                        
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Pizzas;