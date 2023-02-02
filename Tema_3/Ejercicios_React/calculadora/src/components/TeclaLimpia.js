import React,{Component} from "react";


export default class TeclaLimpia extends Component{
    render(){
        return (
            <button class="teclaLimpia" onClick={this.props.handlerTeclaLimpia}>
                CE
            </button>
        );
    }
}