import React from 'react'
import ReactDOM from 'react-dom'

const flname = 'Rithik Choudhary'

ReactDOM.render(
    <>
        <h1>My name is {flname}</h1>
        <p>My lucky number is {10 + 2}</p>
        <p>generate random no {Math.random()}</p>
    </>,
    document.getElementById('root')
)
