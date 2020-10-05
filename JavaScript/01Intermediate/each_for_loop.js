
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

// let sayHello = function(){
//     console.log('Greeting message for user')
// }
//by using foreach loop it will print the message in function till 6 or 7 times bcoz of values defiend upside.

//passing the parameter refer to the elements of the array and tiger works like i in simple for loop
// days.forEach(function(tiger){

//     console.log(tiger)

// })

// first parameter will be element in array and second element if index by default
days.forEach(function (day, index) {

    console.log(`starts with ${index+1} -- ${day}`)

})