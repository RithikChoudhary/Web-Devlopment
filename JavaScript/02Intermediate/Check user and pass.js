let useremail = 'lCO123abe3'
let password = '1234'

// console.log(password.length)
//trim is a method remove extra space
// console.log(useremail.trim())
// console.log(useremail.toLowerCase())

//include apecify that the element in bracket must be in that variable
let userChecker = function(myString){
    if ((myString.includes(123)) && (myString.length > 6)) {
        return true
        
    }
    else{
        return false;
    }
}

console.log(userChecker(useremail))
