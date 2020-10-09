//Here we have selected a paragraph and write its content
// const myPElement = document.querySelector('p')
// myPElement.textContent = 'I am being changed using js'


//here we have selected all paragraph and change their text
// const myPElement = document.querySelectorAll('p')
// myPElement.forEach(function(p){
//     p.textContent = 'I am changed due to for loop'
// })


//here we have remove the  content of the all the paragraph
myPElement = document.querySelectorAll('p')
myPElement.forEach(function(p){
    // p.textContent = 'I am changed due to for loop'
    p.remove()

})