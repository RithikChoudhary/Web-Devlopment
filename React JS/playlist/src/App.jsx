import React from 'react'
import { useState } from 'react'

const App = () => {

    const [name,setName] = useState("rithik")
    const inputEvent = ()=>{
        // console.log(event.target.value);
        setName(event.target.value)
    }
   
    return (
        <>
            <div>
                <h1>Hello {name}</h1>
                <input type="text" placeholder="Enter your text"
                    onChange={inputEvent}
                    value=""
                />
                <button>Click me</button>
            </div>
        </>
    )
}

export default App;