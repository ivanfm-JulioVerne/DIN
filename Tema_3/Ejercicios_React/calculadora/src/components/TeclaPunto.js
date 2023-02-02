import React,{Component} from "react";


export default class TeclaPunto extends Component{
    render(){
        return (
            <button class="teclaPunto" onClick={this.props.handlerTeclaEspecial}>
                {this.props.inf}
            </button>
        );
    }
}