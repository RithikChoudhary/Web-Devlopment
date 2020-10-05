//we will create methon like console.log type
// console.log()


let mytodo = {
    day: 'Monday',
    meeting: 0,
    meetDone: 0,
    addMeeting: function(){
        console.log('Hey im a function')
    },
}


// here we are using this keyword, it will print the currrnt object  things 

let mytodoTow = {
    day: 'Monday',
    meeting: 0,
    meetDone: 0,
    addMeeting: function(){
        console.log(this)
    },
    summary: function(){
        return `You have ${meetings} meetings today`
    }
}

//using this keyword
let mytodoThree = {
    day: 'Monday',
    meeting: 0,
    meetDone: 0,
    addMeeting: function(meet){
        this.meeting = this.meeting +meet
    },
    summary: function(){
        return `You have ${this.meeting} meetings today`
    }
}


mytodo.addMeeting();
mytodoTow.addMeeting();
mytodoThree.addMeeting(4)
console.log(mytodoThree.summary())

