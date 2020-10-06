// const myTodo = ['Buy Bread','Go to Gym','Record youtube videos']
//indexof give the index of element in array
// console.log(myTodo.indexOf('Buy Bread'))


//here we make a array of objects
const newTodos =[{
    title: 'Buy Bread',
    isDone: false,
},{
    title: 'Go to Gym',
    isDone: false
},{
    title: 'Record videos',
    isDone: true,
}]

// const index = newTodos.findIndex(function(todo, index){
//     console.log(todo)
//     return todo.title === 'Go to Gym'

// })

// console.log(index)

//Method one

// const findTodo = function(myTodo , ind){
//     const index  = myTodo.findIndex(function(todo, ind){
//         return todo.title.toLowerCase() === title.toLowerCase()

//     })
//     return myTodo[index]
// }

// // console.log(findTodo)
// let printMe = findTodo(newTodos,'Go to Gym')
// console.log(printMe)


