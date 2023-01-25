import logo from './logo.svg';
import './App.css';
import TeclaNum from './components/TeclaNum';
import Display from './components/Display'
import React from 'react';

export default class App extends React.Component{
  constructor(){
    super()
    this.state={
      datoDisplay:0
    }
  }
  actualizaDisplay=(e)=>{
    this.setState({datoDisplay:e.target.innerHTML})
    console.log("1")
  }
  render(){
  return (
    <div className="App">
      <div className="Calculardora">
      <Display datosDisplay={this.state.datoDisplay}></Display>
      <TeclaNum num="7" actualizaDisplay={this.actualizaDisplay}/>
      <TeclaNum num="8" actualizaDisplay={this.actualizaDisplay}/>
      <TeclaNum num="9" actualizaDisplay={this.actualizaDisplay}/>
      <br/>
      <TeclaNum num="4" actualizaDisplay={this.actualizaDisplay}/>
      <TeclaNum num="5" actualizaDisplay={this.actualizaDisplay}/>
      <TeclaNum num="6" actualizaDisplay={this.actualizaDisplay}/>
      <br/>
      <TeclaNum num="1" actualizaDisplay={this.actualizaDisplay}/>
      <TeclaNum num="2" actualizaDisplay={this.actualizaDisplay}/>
      <TeclaNum num="3" actualizaDisplay={this.actualizaDisplay}/>
      <br/>
      </div>
    </div>
  );}
}
