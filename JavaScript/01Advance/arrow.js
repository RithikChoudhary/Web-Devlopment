// const sayHello = function(name){
//     return "Hey there, "+ name + " !"
// }

// console.log(sayHello("Samay"))



// here => we use this sign 
// const sayHello = (name) =>{
//     return `Hey there, ${name} !`
// }

// console.log(sayHello("Samay"))


//reducing code
const sayHello = (name) => `Hey there, ${name} !`
console.log(sayHello("Samay"))



const todos = [{
    title: 'Buy Bread',
    isDone: true,
}, {
    title: 'Go to Gym',
    isDone: true,
}, {
    title: 'Record videos',
    isDone: false,
}]

const thingsDone = todos.filter((todo) => todos.isDone === true)

console.log(thingsDone);
