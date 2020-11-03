import React from 'react'
import { useState } from 'react'

const App = () => {

    const [name, setName] = useState("")
    const [fullName, setFullName] = useState()


    const onSubmit = (event) => {
        event.prevent.Default();
        setFullName(name)
    }
    const inputEvent = (event) => {
        console.log(event.target.value);
        setName(event.target.value)
    }

    return (
        <>
            <div>
                <form onSubmit={onSubmit}>

                    <h1>Hello {fullName}</h1>
                    <input
                        type="text"
                        placeholder="Enter your text"
                        onChange={inputEvent}
                        value={name}

                    />
                    <button >Click me</button>
                </form>
            </div>
        </>
    )
}
export default App;