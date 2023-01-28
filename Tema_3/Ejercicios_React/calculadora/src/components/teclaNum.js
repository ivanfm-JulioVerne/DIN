import React,{Component} from "react";


export default class TeclaNum extends Component{
    render(){
        return (
            <div class="col-3 border" onClick={this.props.actualizaDisplay}>
                {this.props.num}
            </div>
        );
    }
}