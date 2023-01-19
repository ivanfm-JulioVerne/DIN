import logo from './logo.svg';
import './App.css';
import React,{ Component} from "react";
import Reloj from './components/Reloj';
import { ReactDOM } from 'react-dom';
import Toggle from './components/Toggle';

class App extends Component{
  render(){
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        < Reloj />
        <Toggle/>
      </header>
    </div>
  );}
}

/*
function RelojComponents(props){
  const element=(
    <div>
      <h1>Hola mundo!</h1>
                <h2>Son las {new Date().toLocaleTimeString()}.</h2>
            </div>
  );
  ReactDOM.render(element,document.getElementById("root"));
}
function tictac() {
  ReactDOM.render(< RelojComponents  date={new Date()}/>,document.getElementById("root"));
}
//setInterval(tictac,1000)*/

export default App;
