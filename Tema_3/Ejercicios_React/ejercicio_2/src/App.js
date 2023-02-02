import logo from './logo.svg';
import './App.css';
import Select from './components/Select';
import React,{Component} from 'react';

export default class App extends Component {
  constructor(){
    super()
    this.state={
      diaSemana:""
    }
  }
  seleccionado=(e)=>{
    this.setState({
      diaSemana:e.target.value
    })
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Select seleccionado={this.seleccionado}></Select>
          <p>{this.state.diaSemana}</p>
        </header>
      </div>
    );
  }
}
