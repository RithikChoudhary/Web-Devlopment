import React from 'react'
import ReactDOM from 'react-dom'



// we can use [] bracket to mention our tags
// ReactDOM.render(
//     [
//     <h1>Rithik CHoudhary</h1>,
//     <p>Lets begin </p>,
//     <h2>so we mention it in a div tag</h2>
//     ], 
    
//     document.getElementById('root')
// );

// ReactDOM.render(
//     <React.Fragment>
//     <div>
//     <h1>Rithik CHoudhary</h1>
//     <p>Lets begin </p>
//     <h2>so we mention it in a div tag</h2>
//     </div>
//     </React.Fragment>, 

//     document.getElementById('root')
// );

// ReactDOM.render(
//     <>
//     <div>
//     <h1>Rithik CHoudhary</h1>
//     <p>Lets begin </p>
//     <h2>so we mention it in a div tag</h2>
//     </div>
//     </>, 

//     document.getElementById('root')
// );

ReactDOM.render(
    <>
    <h1>Netflix Series</h1>
    <p>Here are the list of my fav Series</p>

    <ol>
        <li>Dark</li>
        <li>Mr. RObot</li>
        <li>Mirzapur</li>
        <li>Sacred games</li>
        <li>Utopia</li>
        <li>Scam 1992</li>
    </ol>
    </>,
    document.getElementById('root')
)
