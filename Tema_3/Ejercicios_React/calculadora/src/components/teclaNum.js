import React,{Component} from "react";


export default class TeclaNum extends Component{
    render(){
        return (
            <button>
                {this.props.num}
            </button>
        );
    }
}