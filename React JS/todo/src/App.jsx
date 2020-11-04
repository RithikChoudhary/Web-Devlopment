import React, { useState } from 'react'

const App = () => {

    const [inputList,setinputList] = useState()
    return (
        <>
        <div className="main_div">
            <div className="center_div">
                <br/>
                <h1>ToDo List</h1>
                <br/>
                <input type="text" placeholder="Add a item" onChange={itemEvent}/>

                <button> + </button>

                <ol>
                    <li>buy apple</li>
                </ol>
            </div>
        </div>
        </>
    )
};

export default App;