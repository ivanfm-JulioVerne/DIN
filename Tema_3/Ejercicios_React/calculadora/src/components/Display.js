import React,{Component} from "react";


export default class Display extends Component{
    render(){
        return (
        <div class="display">
            <p class="pDisplay">{this.props.datosDisplay}</p>
        </div>    
        );
    }
}