let mytodo = {
    day: 'Monday',
    meeting: 0,
    meetDone: 0,
}

// here todo refers to mytodo as we mentoned while calling function 
// so it is mytodo.meeting = mytodo.meetDone -meet 
let addMeeting = function (todo, meet = 0) {
    todo.meeting = todo.meeting + meet
}

// addMeeting(mytodo, 2)

let meetDone = function (todo, meet = 0) {
    todo.meetDone = todo.meetDone - meet
}

let resetDay = function (todo) {
    todo.meeting = 0
    todo.meetDone = 0
}

let getSummaryOfDay = function (todo) {
    let meetLeft = todo.meeting + todo.meetDone
    return `You have ${meetLeft} meetings today`
}

addMeeting(mytodo, 4)
addMeeting(mytodo, 2)
addMeeting(mytodo, 5)
getSummaryOfDay(mytodo)

console.log(getSummaryOfDay(mytodo))


