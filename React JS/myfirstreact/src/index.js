import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const name = 'Rithik'
const img1 = "https://picsum.photos/210/310"
const img2 = "https://picsum.photos/220/320"
const img3 = "https://picsum.photos/250/300"
ReactDOM.render(
    <>
        <h1 className="heading">Hey im {name}</h1>
        <div className="img_div">
            <img src={img1} alt="Random img" />
            <img src={img2} alt="Random img" />
            <img src={img3} alt="Random img" />
        </div>
    </>,
    document.getElementById('root')
)
