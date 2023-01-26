import React,{Component} from "react";


export default class TeclaOperacion extends Component{
    render(){
        return (
            <button onClick={this.props.eligeOperacion}>
                {this.props.operacion}
            </button>
        );
    }
}