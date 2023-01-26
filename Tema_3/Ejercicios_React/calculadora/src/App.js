import logo from './logo.svg';
import './App.css';
import TeclaNum from './components/TeclaNum';
import Display from './components/Display'
import React from 'react';
import TeclaOperacion from './components/TeclaOperacion';
import TeclaEspecial from './components/TeclaEspecial';

export default class App extends React.Component{
  constructor(){
    super()
    this.state={
      datoDisplay:"0",
      comp1:"0",
      operacion:""
    }
  }
  actualizaDisplay=(e)=>{
    if(this.state.datoDisplay=="0"){
      this.setState({datoDisplay:e.target.innerHTML})
    }else{
      this.setState({datoDisplay:(this.state.datoDisplay+e.target.innerHTML)})
    }
  }
  eligeOperacion=(e)=>{
    if(this.state.datoDisplay!="0"){
      switch (this.state.operacion) {
        case "+":
          this.setState({comp1:toString(parseFloat(this.state.datoDisplay)+parseFloat(this.state.comp1))})
          break;
        case "-":
          this.setState({comp1:toString(parseFloat(this.state.datoDisplay)-parseFloat(this.state.comp1))})
          break;
        case "x":
          this.setState({comp1:toString(parseFloat(this.state.datoDisplay)*parseFloat(this.state.comp1))})
          break;
        case "/":
          this.setState({comp1:toString(parseFloat(this.state.datoDisplay)/parseFloat(this.state.comp1))})
          break;
        case "":
          this.setState({comp1:this.state.datoDisplay})
          break;
      }
      this.setState({datoDisplay:"0"})
      this.setState({operacion:e.target.innerHTML})
    }
    console.log(e.target.innerHTML)
  }
  handlerTeclaEspecial=(e)=>{
    switch (e.target.innerHTML) {
      case "=":
        switch (this.state.operacion) {
          case "+":
            console.log("si")
            this.setState({datoDisplay:toString(parseFloat(this.state.datoDisplay)+parseFloat(this.state.comp1))})
            this.setState({comp1:"0"})
            break;
          case "-":
            this.setState({datoDisplay:toString(parseFloat(this.state.datoDisplay)-parseFloat(this.state.comp1))})
            this.setState({comp1:"0"})
            break;
          case "x":
            this.setState({datoDisplay:toString(parseFloat(this.state.datoDisplay)*parseFloat(this.state.comp1))})
            this.setState({comp1:"0"})
            break;
          case "/":
            this.setState({datoDisplay:toString(parseFloat(this.state.datoDisplay)/parseFloat(this.state.comp1))})
            this.setState({comp1:"0"})
            break;
        }
        break;
    }
  }
  render(){
  return (
    <div className="App">
      <div className="Calculardora">
      <Display datosDisplay={this.state.datoDisplay}></Display>
      <TeclaNum num="7" actualizaDisplay={this.actualizaDisplay}/>
      <TeclaNum num="8" actualizaDisplay={this.actualizaDisplay}/>
      <TeclaNum num="9" actualizaDisplay={this.actualizaDisplay}/>
      <TeclaOperacion operacion="+" eligeOperacion={this.eligeOperacion}/>
      <br/>
      <TeclaNum num="4" actualizaDisplay={this.actualizaDisplay}/>
      <TeclaNum num="5" actualizaDisplay={this.actualizaDisplay}/>
      <TeclaNum num="6" actualizaDisplay={this.actualizaDisplay}/>
      <TeclaOperacion operacion="-" eligeOperacion={this.eligeOperacion}/>
      <br/>
      <TeclaNum num="1" actualizaDisplay={this.actualizaDisplay}/>
      <TeclaNum num="2" actualizaDisplay={this.actualizaDisplay}/>
      <TeclaNum num="3" actualizaDisplay={this.actualizaDisplay}/>
      <TeclaOperacion operacion="x" eligeOperacion={this.eligeOperacion}/>
      <br/>
      <TeclaNum num="0" actualizaDisplay={this.actualizaDisplay}/>
      <TeclaOperacion operacion="/" eligeOperacion={this.eligeOperacion}/>
      <TeclaEspecial inf="=" handlerTeclaEspecial={this.handlerTeclaEspecial}/>
      </div>
    </div>
  );}
}
