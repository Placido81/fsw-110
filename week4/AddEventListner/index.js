/* var square1 = document.getElementById("square1").addEventListener("mouse over", function(){ */
/* document.body.style.backgroundColor="blue"; */
/* document.getElementById("square1").style.border= "2px solid black"; */
/* square1.addEventListener("click", function(){ */
/*     console.log("hello") */
/* }) */
var button = document.getElementById("button");

// button.addEventListener("mouse over", function(){
// console.log(" button has been clicked!")
// })
// })

button.addEventListener("click", function(){
    console.log("hello")
    button.style.color = "red"
})

var square1 = document.getElementById("square1")
square1.style.height = "300px"
square1.style.width = "300px"
square1.style.backgroundColor ="blue"

square1.addEventListener('mouseover', function(){
    square1.style.backgroundColor = "red"
})