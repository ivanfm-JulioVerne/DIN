import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react';
import CajaText from './components/CajaText';

export default class App extends Component{
  constructor(){
    super()
    this.state={
      texto:""
    }
  }
  cambiaTxt=(e)=>{
    console.log("Paso")
    this.setState({
      texto:e.target.value
    })
  }
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <CajaText valor={this.state.texto} cambiaTxt={this.cambiaTxt}></CajaText>
        <CajaText valor={this.state.texto} cambiaTxt={this.cambiaTxt}></CajaText>
      </header>
    </div>
  );
  }
}
