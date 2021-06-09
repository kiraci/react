import React, { Component } from 'react'

class Counter extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            count : 0
        }
    }

    increment(){
        this.setState({
            count : this.state.count + 1
        },
           () => console.log("It is updated " + this.state.count )
        );
    }

    incrementFive(){
        /*
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        */

        this.setState( (prevState, props) => ({
            count: prevState.count + 5
        }))
        
        ;

        console.log("Uniformed increments: " + this.state.count);
    }

    render(){
        return (
            <div>
                <h1>Counter is {this.state.count}</h1>
                <button onClick={ () => this.increment() }>Increment!</button>
                <button onClick={ () => this.incrementFive() }>Increment Five!</button>
            </div>
        )
    };

}

export default Counter