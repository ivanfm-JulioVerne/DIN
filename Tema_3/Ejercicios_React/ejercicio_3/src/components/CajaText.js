import React,{Component} from 'react';
export default class CajaText extends Component{
    render(){
        return(
            <input value={this.props.valor} onChange={this.props.cambiaTxt}></input>
        )
    }
}