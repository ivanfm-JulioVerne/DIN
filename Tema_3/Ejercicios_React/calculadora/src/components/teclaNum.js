import React,{Component} from "react";


export default class TeclaNum extends Component{
    render(){
        return (
            <button onClick={this.props.actualizaDisplay}>
                {this.props.num}
            </button>
        );
    }
}