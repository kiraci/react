import React, { Component } from 'react'
import Child from './ChildComponent'

class Parent extends Component{

    constructor(){
        super();

        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(text){
        console.log("I am clicked! -> " + text);
    }
    
    render(){
        return (
            <div>
                <Child greetHandler={this.clickHandler} />
            </div>
        )
    }

}

export default Parent