import React from 'react';
import { Input } from 'reactstrap';
import '../styles/menuEnsalada.css';


const MenuEnsalada = React.forwardRef((props, ref) => {
    
    
        return (
            <div className="menuEnsalada">
                <table>
                    <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>S</td>
                        <td>C</td>
                    </tr>
                   
                    <tr>
                        <td className="cant">
                            <Input 
                            className="input-cant"
                            name="cantidad" 
                            type="number" 
                            placeholder="0" 
                            ref={ref} 
                            onChange={props.onChangeHandler}/>
                        </td>
                        <td className="name">
                            {props.name}
                        </td>
                        <td className="price">
                            <input
                            name={props.name} 
                            value={props.price} 
                            type="checkbox"
                            onClick={props.checkHandler}/>
                            <label className="sidebar-labels">$ {props.price}</label>
                        </td>
                        <td className="combo">
                            <input
                            name={props.name} 
                            value={props.combo} 
                            type="checkbox" 
                            onClick={props.checkHandler}
                                />
                                <label className="sidebar-labels">$ {props.combo}</label>
                        </td>
                        <td className="add">
                            <button type="submit" onClick={props.submitHandler}>
                                <i className="fas fa-plus-square" ></i>
                            </button>
                            
                        </td>
                        
                    </tr>
                    </tbody>
                </table>


            </div>
        )
    });

export default MenuEnsalada; 