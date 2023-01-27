import React,{Component} from "react";


export default class TeclaNum extends Component{
    render(){
        return (
            <button class="teclaNum" onClick={this.props.actualizaDisplay}>
                {this.props.num}
            </button>
        );
    }
}