//track input form
//this will track the input after clicking out side the input area
// document.querySelector('#myform').addEventListener('change',(event)=>{
//     console.log(event.target.value)
// })


//this will track the input while writing the content
document.querySelector('#myform').addEventListener('input',(event)=>{
    console.log(event.target.value)
})