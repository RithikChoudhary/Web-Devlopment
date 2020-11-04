import React from 'react'
import { useState } from 'react'

const App = () => {

    const [fullName, setFullName] = useState({ fname: "", lname: "" });

    const onSubmit = (event) => {event.preventDefault()}

    const inputEvent = (event) => {
        const { value, name } = event.target;

        setFullName((preValue) => {
            return {
                ...preValue,
                [name]: value,
            }
        })
    }
    return (
        <>
            <div>
                <form onSubmit={onSubmit}>

                    <h1>Hello {fullName.fname}</h1>
                    <input
                        type="text"
                        placeholder="Enter your text"
                        name="fname"
                        onChange={inputEvent}
                        value={fullName.fname}
                    />
                    <br />
                    <input
                        type="text"
                        placeholder="Enter your text"
                        name="lname"
                        onChange={inputEvent}
                        value={fullName.lname} />
                    <br />
                    <button >Click me</button>
                </form>
            </div>
        </>)
}
export default App;