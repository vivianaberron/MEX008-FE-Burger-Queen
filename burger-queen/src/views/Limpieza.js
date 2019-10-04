import React from 'react';
import Textips from '../components/textTips.js';

class Limpieza extends React.Component{
    render (){
        return (
            <div className="limpeza">
                 <Textips titulo="Limpieza"/>

                 <Textips texto="Plancha"/>
                 <Textips texto="Área de Pan"/>
                 <Textips texto="Repisas"/>
            </div>
        )
    }

}
export default Limpieza