import React,{Component} from "react";


export default class Display extends Component{
    render(){
        return (
        <div class="col-12 border">
            <p>{this.props.datosDisplay}</p>
        </div>    
        );
    }
}