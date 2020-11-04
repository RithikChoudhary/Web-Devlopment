import React, { useState } from 'react'
import ToDoLists from './ToDoLists'
const App = () => {

    const [inputList, setinputList] = useState()
    const [items, setItems] = useState([])

    const itemEvent = (event) => {
        setinputList(event.target.value)
    }
    const listOfItems = () => {
        setItems((olditems) => {
            return [...olditems, inputList]
        })
        setinputList('')
    }

    const deleteItems = (id) => {

        console.log("clicked")
        setItems((oldItems) => {
            return oldItems.filter((arrElem, index) => {
                return index !== id;
            })
        })
    }
    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>ToDo List</h1>
                    <br />
                    <input type="text" placeholder="Add a item"
                        value={inputList}
                        onChange={itemEvent}
                    />

                    <button onClick={listOfItems}> + </button>
                    <ol>
                        {items.map((itemval, index) => {
                            return (
                                <>
                                    <ToDoLists
                                        text={itemval}
                                        key={index}
                                        id={index}
                                        onSelect={deleteItems}
                                    />
                                    <br />
                                </>
                            )
                        })}
                    </ol>
                </div>
            </div>
        </>
    )
};

export default App;