import React,{Component} from 'react';

export default class Selector extends Component{
    render(){
        return(
            <form>
                <label>Elige un producto: </label>
                <select onChange={this.props.haElegido}>
                    <option value="Pizza">Pizza</option>
                    <option value="Hamburguesa">Hamburguesa</option>
                    <option value="Arrroz A La Cubana">Arrroz A La Cubana</option>
                    <option value="Nachos">Nachos</option>
                </select>
                <br/>
                <label>Cantidad: </label>
                <input type="number" onChange={this.props.haCambCantidad}></input>
                <br/>
                <label>Precio: </label>
                <input type="number" onChange={this.props.haCambPrecio}></input>
                <br/>
                <button type='button' onClick={this.props.anadir}>Enviar</button>
            </form>
        )
    }
}