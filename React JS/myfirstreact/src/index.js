import React from 'react'
import ReactDOM from 'react-dom'

const fname = 'Rithik'
const lname = 'Choudhary'
var date  = new Date().toLocaleDateString();
var time = new Date().toLocaleTimeString();
// var hr = x.getHours()
// var min = x.getMinutes()
// var sec = x.getSeconds()
// var dat = x.getDate()
// var mon = x.getMonth()
// var year = x.getFullYear()
ReactDOM.render(
    <>

        <h1>My name is {fname +' '+ lname}</h1>
        <h1>My name is {`${fname} ${lname}`}</h1>
        <h2>My name is {fname} {lname}</h2>
        <p>Current Time is {time}</p>
        <p>Todays date is {date}</p>

        <p>My lucky number is {10 + 2}</p>
        <p>generate random no {Math.random()}</p>
    </>,
    document.getElementById('root')
)
