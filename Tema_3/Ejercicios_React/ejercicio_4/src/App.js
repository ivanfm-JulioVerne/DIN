import './App.css';
import Selector from './components/Selector';
import React,{ Component } from 'react';

export default class App extends Component{
  constructor(){
    super()
    this.state={
      elegido:0,
      cantidad:0,
      precio:0
    }
  }

  haElegido=(e)=>{
    this.setState({
      elegido:e.target.value
    })
  }

  haCambCantidad=(e)=>{
    this.setState({
      cantidad:e.target.value
    })
  }

  haCambPrecio=(e)=>{
    this.setState({
      precio:e.target.value
    })
  }

  anadir=(e)=>{
    const li=document.createElement("li")
    var node=null
    switch (this.state.elegido){
      case 1:
        node=document.createTextNode("Pizza - " + this.state.cantidad + " - " + this.state.precio)
        break;
      case 2:
        node=document.createTextNode("Hamburguesa - " + this.state.cantidad + " - " + this.state.precio)
        break;
      case 3:
        node=document.createTextNode("Arroz a la cubana - " + this.state.cantidad + " - " + this.state.precio)
        break;
      case 4:
        node=document.createTextNode("Nachos - " + this.state.cantidad + " - " + this.state.precio)
        break;
    }
    li.appendChild(node)
    document.getElementById("lista").appendChild(li)
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Selector
            haElegido={this.haElegido} 
            haCambCantidad={this.haCambCantidad} 
            haCambPrecio={this.haCambPrecio} 
            anadir={this.anadir}/>
          <ul id='lista'>
          </ul>
        </header>
      </div>
    );
  }
}
