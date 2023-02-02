import React,{Component} from 'react';

export default class Sumando2 extends Component{
    render(){
        return(
            <div>
                <label>Sumando2: </label><input type="number" onChange={this.props.cambiaSumando2}/>
            </div>
        )
    }
}