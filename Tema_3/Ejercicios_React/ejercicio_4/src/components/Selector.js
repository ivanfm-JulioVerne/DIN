import React,{Component} from 'react';

export default class Selector extends Component{
    render(){
        return(
            <form>
                <select onChange={this.props.haElegido}>
                    <option value="0">Elige un producto</option>
                    <option value="1">Pizza</option>
                    <option value="2">Hamburguesa</option>
                    <option value="3">Arrroz A La Cubana</option>
                    <option value="4">Nachos</option>
                </select>
                <input type="number" onChange={this.props.haCambCantidad}></input>
                <input type="number" onChange={this.props.haCambPrecio}></input>
                <button type='submit' onClick={this.props.anadir}>Enviar</button>
            </form>
        )
    }
}