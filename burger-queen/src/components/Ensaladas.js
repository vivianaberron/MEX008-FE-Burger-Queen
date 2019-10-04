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
                                <Input type="number" placeholder="0"></Input>
                            </td>
                            <td className="name">
                                {this.props.name}
                            </td>
                            <td className="price">
                                {this.props.price}
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Ensaladas;