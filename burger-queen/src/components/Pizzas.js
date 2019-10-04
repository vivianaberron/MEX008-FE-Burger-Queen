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

export default Pizzas;