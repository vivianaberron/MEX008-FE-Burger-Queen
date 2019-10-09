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
                            <Input
                            name={this.props.name} 
                            type="number" 
                            placeholder="0"
                            onChange={this.props.onChangeHandler}></Input>
                        </td>
                        <td className="name">
                            {this.props.name}
                        </td>
                        <td className="price-med">
                            <Input 
                            value={this.props.priceMed}
                            type="checkbox"
                            onClick={this.props.checkHandler}/>
                            <label>${this.props.priceMed}</label>
                        </td>
                        <td className="price-gran">
                            <Input 
                            value={this.props.priceGran}
                            type="checkbox"
                            onClick={this.props.checkHandler}/>
                            <label>${this.props.priceGran}</label>
                        </td>
                        <td className="price-fam">
                            <Input 
                            value={this.props.priceFam}
                            type="checkbox"
                            onClick={this.props.checkHandler}/>
                            <label>{this.props.priceFam}</label>
                        </td>
                        <td className="add">
                        <button type="submit" onClick={this.props.submitHandler}>
                                <i className="fas fa-plus-square" ></i>
                            </button>
                        </td>
                        
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Pizzas;