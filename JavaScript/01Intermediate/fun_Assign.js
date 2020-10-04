const mytodo = []

mytodo.push('But Bread')
mytodo.push('Record videos for youtube')
mytodo.push('Go to gym')

mytodo.forEach(function(todo,index){
    console.log(`Your task no. ${index +1} is: ${todo}`)
})

