import logo from './logo.svg';
import './App.css';
import React from 'react';
import CajaText from './components/CajaText';

export default(props)=> {
  const [text,setText]=React.useState("");
  const cambia=(e)=>{
    setText(t=> t=e.target.value);
  }
  return (
    <>
      <CajaText value={text} cambia={cambia}></CajaText>
      <CajaText value={text} cambia={cambia}></CajaText>
    </>
  );
}
