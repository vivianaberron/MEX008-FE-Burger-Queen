import React from 'react';
import '../styles/Requisiciones.css'
import { Link } from 'react-router-dom';
import {Button} from 'reactstrap';



class Requisiciones extends React.Component{
    render (){
        return (
            <div className="requisiciones">
                <h2 id="titulo">Requisiciones</h2>


                <table className="Requisiciones_Tabla">
                    <tbody>
                        <tr>
                        <td><strong>Cantidad</strong></td>
                        <td><strong>Insumos</strong></td>
                        </tr>

                        <tr>
                        <td>3 pz</td>
                        <td>Medallon Gula</td>
                        </tr>

                        <tr>
                        <td>200 gr</td>
                        <td>Cacahuate</td>
                        </tr>

                        <tr>
                        <td>8 kg</td>
                        <td>Cebolla</td>
                        </tr>
                    </tbody>

            
                </table>
                <br/>
                <Link to="/" className="requisiciones_link">
                    <Button className="btn btn-outline" color="success" block  text = "Salir">Finalizar</Button>
                </Link>    
            </div>

        );
    }
}
export default Requisiciones