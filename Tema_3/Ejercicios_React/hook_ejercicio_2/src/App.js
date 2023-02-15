import logo from './logo.svg';
import './App.css';
import Select from './components/Select';
import React from 'react';

export default(props)=> {
  const [diaSemana,setDiaSemana]=React.useState("");
  const elige=(e)=>{setDiaSemana(d=>d=e.target.value)}
  return (
    <>
      <Select elige={elige}></Select>
      <h1>{diaSemana}</h1>
    </>
  );
}