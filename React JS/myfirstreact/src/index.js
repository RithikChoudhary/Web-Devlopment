import React from 'react'
import ReactDOM from 'react-dom'

// ReactDOM.render(
//     <div>
//     <h1>Rithik CHoudhary</h1>
//     <p>Lets begin </p>
//     <h2>so we mention it in a div tag</h2>
//     </div>, 

//     document.getElementById('root')
// );

// we can use [] bracket to mention our tags
ReactDOM.render(
    [
    <h1>Rithik CHoudhary</h1>,
    <p>Lets begin </p>,
    <h2>so we mention it in a div tag</h2>
    ], 
    
    document.getElementById('root')
);
 