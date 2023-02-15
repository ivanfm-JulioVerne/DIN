import React from 'react';

export default ({
    value = "",
    cambia = () => null
}) => (
    <input onChange={cambia} value={value}></input>
);