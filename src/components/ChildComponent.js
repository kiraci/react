import React from 'react'

function Child(props){
    return (
        <button onClick={() => props.greetHandler('merhaba')}>Click Me!</button>
    )
}

export default Child