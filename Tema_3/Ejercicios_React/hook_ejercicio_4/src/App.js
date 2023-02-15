import logo from './logo.svg';
import './App.css';
import React from 'react';

export default(props)=> {
  const [elegido,setElegido]=React.useState("");
  const [cantidad,setCantidad]=React.useState(0);
  const [precio,setPrecio]=React.useState(0);
  const [datosFactura,setDatosFactura]=React.useState("");
  const [primero,setPrimero]=React.useState(true);
  const [total,setTotal]=React.useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}