import logo from './logo.svg';
import './App.css';
import Sumando1 from './components/Sumando1';
import React,{ Component } from 'react';
import Sumando2 from './components/Sumando2';
import Resultado from './components/Resultado';
import BotonSumar from './components/BotonSumar';

export default class App extends Component {
  constructor(){
    super()
    this.state={
      sumando1:0,
      sumando2:0,
      resultado:null
    }
  }
  cambiaSumando1=(e)=>{
    this.setState({
      sumando1:e.target.value
    })
  }
  cambiaSumando2=(e)=>{
    this.setState({
      sumando2:e.target.value
    })
  }
  sumar=(e)=>{
    window.alert(parseInt(this.state.sumando1)+parseInt(this.state.sumando2))
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Sumando1 cambiaSumando1={this.cambiaSumando1}></Sumando1>
          <Sumando2 cambiaSumando2={this.cambiaSumando2}></Sumando2>
          <br></br>
          <BotonSumar sumar={this.sumar}></BotonSumar>
          <br></br>
        </header>
      </div>
    );
  }
}
