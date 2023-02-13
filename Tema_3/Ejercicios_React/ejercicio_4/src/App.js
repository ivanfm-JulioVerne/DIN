import './App.css';
import Selector from './components/Selector';
import React,{ Component } from 'react';
import MuestraFactura from './components/MuestraFactura';

export default class App extends Component{
  constructor(){
    super()
    this.state={
      elegido:"",
      cantidad:0,
      precio:0,
      datosFactura:"",
      primero:true,
      total:0
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
    var tabla=document.getElementById("Tabla")
    if (this.state.primero){
      var trTitulo=document.createElement("tr")
      var thTituloNombre=document.createElement("th")
      var thTituloPrecio=document.createElement("th")
      var thTituloCantidad=document.createElement("th")
      var nodeTituloNombre=document.createTextNode("Nombre")
      var nodeTituloPrecio=document.createTextNode("Precio")
      var nodeTituloCantidad=document.createTextNode("Cantidad")
      thTituloNombre.appendChild(nodeTituloNombre)
      thTituloPrecio.appendChild(nodeTituloPrecio)
      thTituloCantidad.appendChild(nodeTituloCantidad)
      trTitulo.appendChild(thTituloNombre)
      trTitulo.appendChild(thTituloCantidad)
      trTitulo.appendChild(thTituloPrecio)
      tabla.appendChild(trTitulo)

      this.setState({
        primero:false
      })
    }
    var tr=document.createElement("tr")
    var tdNombre=document.createElement("td")
    var tdPrecio=document.createElement("td")
    var tdCantidad=document.createElement("td")
    var nodeNombre=document.createTextNode(this.state.elegido)
    var nodePrecio=document.createTextNode(this.state.precio)
    var nodeCantidad=document.createTextNode(this.state.cantidad)
    tdNombre.appendChild(nodeNombre)
    tdPrecio.appendChild(nodePrecio)
    tdCantidad.appendChild(nodeCantidad)
    tr.appendChild(tdNombre)
    tr.appendChild(tdCantidad)
    tr.appendChild(tdPrecio)
    tabla.appendChild(tr)
    this.setState({
      total:this.state.total+parseFloat(this.state.precio)*parseInt(this.state.cantidad)
    })
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
          <table id="Tabla">
          </table>
          <p>Precio total: {this.state.total}€</p>
        </header>
      </div>
    );
  }
}
