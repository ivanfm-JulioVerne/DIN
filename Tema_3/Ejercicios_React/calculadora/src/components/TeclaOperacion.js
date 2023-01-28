import React,{Component} from "react";


export default class TeclaOperacion extends Component{
    render(){
        return (
            <button class="teclaOp" onClick={this.props.eligeOperacion}>
                {this.props.operacion}
            </button>
        );
    }
}