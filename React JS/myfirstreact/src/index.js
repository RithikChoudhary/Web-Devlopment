import React from 'react'
import ReactDOM from 'react-dom'

const fname = 'Rithik'
const lname = 'Choudhary'



ReactDOM.render(
    <>
        <h1>My name is {fname +' '+ lname}</h1>
        d
        <h1>My name is {`${fname} ${lname}`}</h1>
        <h2>My name is {fname} {lname}</h2>
        <p>My lucky number is {10 + 2}</p>
        <p>generate random no {Math.random()}</p>
    </>,
    document.getElementById('root')
)
