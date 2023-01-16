import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import HelloComponent from './components/HelloComponent';

class App extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <HelloComponent></HelloComponent>
        </header>
      </div>
    );
  }
}

export default App;
