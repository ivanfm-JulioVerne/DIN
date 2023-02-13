import React,{Component} from 'react';

export default class MuestraFactura extends Component{
    constructor(){
        super()
        this.state={

        }
    }
    
    render(){
        return(
            <p>{this.props.datosFactura}</p>
        )
    }
}