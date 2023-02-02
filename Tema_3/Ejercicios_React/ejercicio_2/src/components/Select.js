import React,{Component} from 'react';

export default class Select extends Component{
    render(){
        return(
            <select value="0" onChange={this.props.seleccionado}>
                <option value="0">Elige un dia de la semana</option>
                <option value="Lunes">Lunes</option>
                <option value="Martes">Martes</option>
                <option value="Miércoles">Miércoles</option>
                <option value="Jueves">Jueves</option>
                <option value="Viernes">Viernes</option>
                <option value="Sábado">Sábado</option>
                <option value="Domingo">Domingo</option>
            </select>
        )
    }
}