alert("Welcome, please copy the code that displays next");
var x = Math.random();
var userId = alert(x);

function getDetails() {
    var userName = prompt("What is your name");
    var passWord = prompt("Input password", "Must be more than 8 characters");
    if(passWord.length < 8){
        getDetails();
    } else{
        confirmId();
    }
}
function confirmId() {
    var getId = +prompt("Input User Id");
    if (getId == x){
        alert("Welcome")
    }   else{
            confirmId()
        }
    
}

function accessPage(){
    getDetails();

}

accessPage();