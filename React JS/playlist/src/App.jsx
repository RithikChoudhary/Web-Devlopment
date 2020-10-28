import React from 'react';
import { useState } from 'react';


const App = () => {
    let time = new Date().toLocaleTimeString()
    const state = useState();
    const [count, setCount] = useState(time)

    const IncNum = () => {
        time = new Date().toLocaleTimeString()
        setCount(time);
    }
    setInterval(IncNum, 1000)
    return (
        <>
            <h1> {count} </h1>
        </>
    )

}

export default App;
