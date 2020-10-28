import React from 'react'
import { useState } from 'react'


const App = () => {

    const purple = "#8e44ad"
    const [bg, setbg] = useState(purple);
    const [name,setName] = useState("click Me")

    const bgChange = () => {
        let newbg = "#34495e"
        setbg(newbg)
        setName("Ouch!!")
    }

    const doubl = () =>{
        setbg(purple)
        setName("Double clicked")
    }


    return (
        <>
            <div style={{ backgroundColor: bg }}>
                <button onMouseEnter={bgChange} onMouseLeave= {doubl}>{name}</button>
            </div>
        </>
    )
}

export default App;
