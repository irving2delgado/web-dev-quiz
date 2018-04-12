// var submitButton = document.getElementById("submit");

// submitButton.addEventListener("click", sayHello);

// function sayHello() {
//   var messageBox = document.getElementById("message");
//   messageBox.innerText = "Hello there, this is a message!";
// }

 function correctAnsw(){
    var answer = parseFloat(document.getElementById("answerbox").value);
   if   (answer == 1) {
     document.getElementById("message").innerHTML = "correct!!";
 }
   
 }
