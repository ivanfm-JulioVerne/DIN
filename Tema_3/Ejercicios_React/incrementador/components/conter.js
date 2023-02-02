import React,{Component} from 'react';

export default class Conter extends Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        }

        this.increment=this.increment.bind(this);
        this.decrecement=this.increment.bind(this);
        this.reset=this.increment.bind(this);

        
    }
}