import logo from './logo.svg';
import './App.css';
import TeclaNum from './components/TeclaNum';
import Display from './components/Display'
import React from 'react';

export default class App extends React.Component{
  render(){
  return (
    <div className="App">
      <div className="Calculardora">
      <Display datosDisplay="1"></Display>
      <TeclaNum num="7" />
      <TeclaNum num="8" />
      <TeclaNum num="9" />
      <br/>
      <TeclaNum num="4" />
      <TeclaNum num="5" />
      <TeclaNum num="6" />
      <br/>
      <TeclaNum num="1" />
      <TeclaNum num="2" />
      <TeclaNum num="3" />
      <br/>
      </div>
    </div>
  );}
}
