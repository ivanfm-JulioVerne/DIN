import React from 'react';

export default ({
    haElegido = () => null,
    haCambCantidad= () => null,
    haCambPrecio = () => null,
    anadir = () => null,

}) => (
    <form>
        <label>Elige un producto: </label>
        <select onChange={haElegido}>
            <option value="Pizza">Pizza</option>
            <option value="Hamburguesa">Hamburguesa</option>
            <option value="Arrroz A La Cubana">Arrroz A La Cubana</option>
            <option value="Nachos">Nachos</option>
        </select>
        <br/>
        <label>Cantidad: </label>
        <input type="number" onChange={haCambCantidad}></input>
        <br/>
        <label>Precio: </label>
        <input type="number" onChange={haCambPrecio}></input>
        <br/>
        <button type='button' onClick={anadir}>Enviar</button>
    </form>
);