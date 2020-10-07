var john = {
    name: 'I am john',
    age: 24,
    isActive: true
}

var marry = {
    name: 'I am marry',
    age: 23,
    isActive: true,
}

var sam = {
    name: 'I am sam',
    age: 29,
    isActive: false
}

//map convert into object and iteratable
let users = new Map()

console.log(typeof users);


for( const value of users.values()){
    console.log(value.name)
}
