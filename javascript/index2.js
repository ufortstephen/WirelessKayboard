alert("Welcome, please copy the code that displays next");

 function getRandomInt(min, max) {
    min = Math.ceil(1000);
    max = Math.floor(8000);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
  var x =getRandomInt(1000, 8000);
  alert(x)
  

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