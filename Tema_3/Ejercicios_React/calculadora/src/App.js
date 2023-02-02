import logo from './logo.svg';
import './App.css';
import TeclaNum from './components/teclaNum';
import Display from './components/Display'
import React from 'react';
import TeclaOperacion from './components/TeclaOperacion';
import TeclaEspecial from './components/TeclaEspecial';
import TeclaPunto from "./components/TeclaPunto";
import TeclaLimpia from './components/TeclaLimpia';

export default class App extends React.Component{
  constructor(){
    super()
    this.state={
      datoDisplay:"0",
      comp1:"0",
      operacion:"",
      igual:false
    }
  }
  actualizaDisplay=(e)=>{
    if (!this.state.igual) {
      if(this.state.datoDisplay=="0"){
        this.setState({datoDisplay:e.target.innerHTML})
      }else{
        this.setState({datoDisplay:(this.state.datoDisplay+e.target.innerHTML)})
      }
    }else{
      this.setState({datoDisplay:e.target.innerHTML,comp1:"0",igual:false})
    }
  }

  handlerTeclaLimpia=(e)=>{
    console.log("Si")
    this.setState({
      datoDisplay:"0",
      comp1:"0",
      operacion:"",
      igual:false
    })
  }

  eligeOperacion=(e)=>{
    if(this.state.datoDisplay!="0"){
      switch (this.state.operacion) {
        case "+":
          this.setState({comp1:parseFloat(this.state.datoDisplay)+parseFloat(this.state.comp1)+""})
          break;
        case "-":
          this.setState({comp1:parseFloat(this.state.datoDisplay)-parseFloat(this.state.comp1)+""})
          break;
        case "x":
          this.setState({comp1:parseFloat(this.state.datoDisplay)*parseFloat(this.state.comp1)+""})
          break;
        case "/":
          this.setState({comp1:parseFloat(this.state.datoDisplay)/parseFloat(this.state.comp1)+""})
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
            this.setState({datoDisplay:parseFloat(this.state.datoDisplay)+parseFloat(this.state.comp1)+""})
            this.setState({comp1:"0",igual:true})

            break;
          case "-":
            this.setState({datoDisplay:parseFloat(this.state.comp1)-parseFloat(this.state.datoDisplay)+""})
            this.setState({comp1:"0"})
            break;
          case "x":
            this.setState({datoDisplay:parseFloat(this.state.datoDisplay)*parseFloat(this.state.comp1)+""})
            this.setState({comp1:"0"})
            break;
          case "/":
            this.setState({datoDisplay:parseFloat(this.state.comp1)/parseFloat(this.state.datoDisplay)+""})
            this.setState({comp1:"0"})
            break;
        }
        break;
      case ".":
        if (this.state.datoDisplay=="0") {
          this.setState({datoDisplay:"0."})
        }else if (!this.state.datoDisplay.includes(".")) {
          this.setState({datoDisplay:this.state.datoDisplay+"."})
        }
        break;
    }
  }
  render(){
  return (
    <div className="App">
      <div className="Calculardora">
      <div class="separador"></div>
      <Display datosDisplay={this.state.datoDisplay}></Display>
      <div class="separador"></div>
      <TeclaLimpia handlerTeclaLimpia={this.handlerTeclaLimpia} />
      <br/>
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
      <TeclaPunto inf="." handlerTeclaEspecial={this.handlerTeclaEspecial}/>
      <TeclaNum num="0" actualizaDisplay={this.actualizaDisplay}/>
      <TeclaEspecial inf="=" handlerTeclaEspecial={this.handlerTeclaEspecial}/>
      <TeclaOperacion operacion="/" eligeOperacion={this.eligeOperacion}/>
      <div class="separador"></div>
      </div>
    </div>
  );}
}
