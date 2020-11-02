import React from 'react'
import { useState } from 'react'

const App = () => {

    const [name, setName] = useState()
    const [fullName, setFullName] = useState()

    const inputEvent = (event) => {
        setName(event.target.value)
    }
    const onSubmit = () => {
        setFullName(name)
    }

    return (
        <>
            <div>
                <form>
                    <h1>Hello {fullName}</h1>
                    <input type="text" placeholder="Enter your text"
                        onChange={inputEvent}

                    />
                    <button onClick={onSubmit}>Click me</button>
                </form>
            </div>
        </>
    )
}
export default App;