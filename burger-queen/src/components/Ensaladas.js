import React from 'react';
import { Input } from 'reactstrap';

class Ensaladas extends React.Component{
    render(){
        return(
            <div>
                <table>
                    <tbody>
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
                            <td className="price">
                                <Input
                                value={this.props.price}
                                type="checkbox"
                                onClick={this.props.checkHandler}
                                />
                                <label>$ {this.props.price}</label>
                               
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

export default Ensaladas;