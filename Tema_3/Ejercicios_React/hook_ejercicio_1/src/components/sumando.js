import React from 'react';

export default ({
    label = "",
    cambiaSumando = () => null
}) => (
    <div class="container-sumando">
        <label>{label}</label>
        <input type="number" onChange={cambiaSumando}></input>
    </div>
);