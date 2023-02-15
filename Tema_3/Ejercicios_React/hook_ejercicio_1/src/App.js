import logo from './logo.svg';
import './App.css';
import React from 'react';
import Sumando from './components/sumando';

export default(props)=> {
  const [sumando1,setSumando1]=React.useState(0);
  const [sumando2,setSumando2]=React.useState(0);
  const [resultado,setResultado]=React.useState(null);
  const cambiaSumando1=(e)=>{
    setSumando1(n=>n=e.target.value)
    console.log(sumando1);
  }
  const cambiaSumando2=(e)=>{
    setSumando2(n=>n=e.target.value)
    console.log(sumando2);
  }
  const calcularResultado=()=>{
    setResultado(n=>n=parseInt(sumando1)+parseInt(sumando2))
  }

  return (
    <>
    <Sumando label={"Sumando1"} cambiaSumando={cambiaSumando1}>
    </Sumando>
    <br></br>
    <Sumando label={"Sumando2"} cambiaSumando={cambiaSumando2}>
    </Sumando>
    <br></br>
    <button onClick={calcularResultado}>Calcular Resultado</button>
    <label>Resultado: {resultado}</label>
    </>
  );
}
