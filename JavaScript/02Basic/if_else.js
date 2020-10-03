// if (false)
// {
//     console.log('Im inside Block')
// }
// else if(true)
// {
//     console.log('this is else if')
// }
// else
// {
//     console.log('else part')
// }

var whoIsHere = 'user'

if(whoIsHere === 'user')
{
    console.log('Greeting message for user')
    console.log('Allow access to view all courses')
}
else if(whoIsHere === 'teacher')
{
    console.log('Greeting message for teacher')
    console.log('Allow access to his courses')
}
else{
    console.log('Please verify your email')
    console.log('Send user an email for verification')
}