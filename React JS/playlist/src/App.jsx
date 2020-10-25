import React from 'react';
import { useState } from 'react';
// import SlotM from './SlotMach'


// const App = () => {
//     return (
//         <>
//             <h1 className='heading_style'>
//                 🎰 Welcome to <span style={{ fontWeight: 'bold' }}>Slot machine game </span>🎰
//             </h1>
//             <div className='slotmachine'>
//                 <SlotM x='😄' y='😄' z='😄' />
//                 <hr/>
//                 <SlotM x='😄' y='⛈' z='😄' />
//                 <hr/>
//                 <SlotM x='🔥' y='〽' z='😄' />
//                 <hr/>
//             </div>
//         </>
//     )
// }



const App = () => {
    let time =new Date().toLocaleTimeString()
    const state = useState();
    const [count, setCount] = useState(time)

    const IncNum = () => {
        time =new Date().toLocaleTimeString()
        setCount(time);
    }
    return (
        <>
            <h1 className='h1'> {count} </h1>
            <button className='b' onClick={IncNum}>Click Me</button>
        </>
    )
}
export default App;