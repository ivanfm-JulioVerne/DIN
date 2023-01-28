import React,{Component} from "react";


export default class TeclaEspecial extends Component{
    render(){
        return (
            <div class="col-3 border" onClick={this.props.handlerTeclaEspecial}>
                {this.props.inf}
            </div>
        );
    }
}