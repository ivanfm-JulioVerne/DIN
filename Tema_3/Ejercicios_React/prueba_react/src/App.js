import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import { Reloj } from './components/Reloj';

class App extends Component {
  constructor(){
    super()
    this.state={
      name: 'Jacobo'
    }
  }
  
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Reloj></Reloj>
        </header>
      </div>
    );
  }

}

export default App;
