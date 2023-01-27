import React,{Component} from "react";


export default class TeclaNum extends Component{
    render(){
        return (
        <div class="display">
            <p class="pDisplay">{this.props.datosDisplay}</p>
        </div>    
        );
    }
}