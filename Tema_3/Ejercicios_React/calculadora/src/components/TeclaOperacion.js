import React,{Component} from "react";


export default class TeclaOperacion extends Component{
    render(){
        return (
            <div class="col-3 border" onClick={this.props.eligeOperacion}>
                {this.props.operacion}
            </div>
        );
    }
}