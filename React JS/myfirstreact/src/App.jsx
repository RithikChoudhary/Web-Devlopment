import React from 'react'
import './index.css'

function App(){
    let currDate = new Date(2020,10,21,14)
    currDate = currDate.getHours()
    let greeting = ''
    const cssStyle = {}
    if (currDate >= 1 && currDate <12){
        greeting = 'Good Morning'
        cssStyle.color = 'green'
    }
    else if(currDate >=12 && currDate <20)
    {
        greeting = 'Good Afternoon'
        cssStyle.color = 'red'
    }
    else
    {
        greeting = 'good night'
        cssStyle.color = 'blue'
    }
    return (
        <>
        <div>
            <h1 >
                Hello sir, <span style ={cssStyle}>{greeting}</span>
            </h1>
        </div>
        </>
    )

}

export default App