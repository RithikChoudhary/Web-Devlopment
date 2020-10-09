// alert('connected')
function myValidation(){
    // alert('hey connect')
    // let myValue = document.querySelector('myform')
    let myValue = document.getElementById('myform').value;

    //isNaN is to check that it is not number
    if (isNaN(myValue) || myValue < 1 || myValue >20) {
        console.log("Not a valid input")
    }
    else{
        console.log("This input is cool");
    }



}