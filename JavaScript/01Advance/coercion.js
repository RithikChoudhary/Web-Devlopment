// it gives 0 bcoz js treat them as integer
console.log('5' - 5)
// it gives 55 bcoz js treat them as string
console.log('5' + 5)

//here js treat true as 1 so anser is 6
// const adder = true +5
// console.log(adder)

//here js gives correct answer as 5
// const adder = false +5
// console.log(adder)

//logic for geeting detaols from DB
const loginDetails = []

//here show auth failed
const loginId = loginDetails[0]
if (loginId !== undefined) {
    console.log('Allow user to login')
}
else{
    console.log('Auth failed')
}

//here show allowed without any condition 
if (' ') {
    console.log('Allow user to login')
}
else{
    console.log('Auth failed')
}




// 0 is false
// '' is false

// null and undefined considered false