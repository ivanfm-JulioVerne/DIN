import React,{Component} from "react";


export default class TeclaEspecial extends Component{
    render(){
        return (
            <button onClick={this.props.handlerTeclaEspecial}>
                {this.props.inf}
            </button>
        );
    }
}