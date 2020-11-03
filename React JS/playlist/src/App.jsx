import React from 'react'
import { useState } from 'react'

const App = () => {

    const [fullName, setFullName] = useState({fname: "",lname: ""});
    const onSubmit = (event) => {
        event.prevent.Default();
    }
    const inputEvent = (event) => {
        // console.log(event.target.value);
        // console.log(event.target.name);
        const {value,name} = event.target;

        setFullName((preValue) => {
            if (name === 'fname') {
                return {
                    fname: value,
                    lname: preValue.lname,
                }
            }
            else if (name === 'lname') {
                return {
                    fname: preValue.lname,
                    lname: value,
                }
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
                        name="fName"
                        onChange={inputEvent}
                        value={fullName.fname}
                    />
                    <br />
                    <input
                        type="text"
                        placeholder="Enter your text"
                        name="lName"
                        onChange={inputEvent}
                        value={fullName.lname}
                    />
                    <br />
                    <button >Click me</button>
                </form>
            </div>
        </>
    )
}
export default App;