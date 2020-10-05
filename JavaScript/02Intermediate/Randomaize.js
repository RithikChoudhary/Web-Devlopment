let numOne =22
let numTwo = 7
//if we use result.toFixed() it will round-oof the number
result = 22/7

console.log(result.toFixed(2))

let floatRes = result.toFixed(2)

//floor will round-off the number to minimize till desimal ko hata dega
// console.log(Math.floor(floatRes))

// console.log(Math.random()*10 +1)

let upper = 6
let lower = 1
let myRandom = Math.floor(Math.random() * (upper - lower + 1) + lower)

console.log(myRandom)
