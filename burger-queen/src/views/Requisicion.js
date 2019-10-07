import React from 'react';
import Textips from '../components/textTips.js';
import '../styles/textTips.css';

class Requisiciones extends React.Component{
    render (){
        return (
            <div className="requisiciones">
                <h2 id="titulo">Requisiciones</h2>


                <table className="tabla">
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

                </table>

            </div>

        );
    }
}
export default Requisiciones