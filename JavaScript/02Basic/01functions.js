// let myMultiplieer = function (num1, num2) {
//     let result = num1 * num2
//     console.log(result)
// }

// myMultiplieer(5, 6)


// let myMultiplieer = function (num1, num2) {
//     return num1 * num2

// }

//in guest function we defined default parameter, so if nothing pass in function calling then these will run 
let guestUser = function(name = 'unName' , courseCount = 0){
    return 'Hello ' + name + ' YOur Course count is ' +courseCount
}

console.log(guestUser())