import React,{Component} from 'react';

export default class Sumando1 extends Component{
    render(){
        return(
            <div>
                <label>Sumando1: </label><input type="number" onChange={this.props.cambiaSumando1}/>
            </div>
        )
    }
}