import React from 'react'
import ReactDOM from 'react-dom'
import add from './Calc'
ReactDOM.render(
    <>
    <li>{add(40,4)}</li>
    </>,
    document.getElementById('root')
)
