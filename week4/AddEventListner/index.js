// Header:
var h1 = document.createElement("h1")
h1.textContent = "DJ.JS"
document.body.append(h1)

// Square with diffrent Functions:
var square1 = document.getElementById("square1")
square1.style.height = "300px"
square1.style.width = "300px"
// Styling Square with color:
square1.addEventListener("mouseover", function(){
square1.style.backgroundColor ="blue";
})
square1.addEventListener("mouseout", function(){
    square1.style.backgroundColor = "red";
})
square1.addEventListener("mouseup", function(){
    square1.style.backgroundColor = "yellow";
})
square1.addEventListener("mousedown", function(){
    square1.style.backgroundColor = "green";
})
square1.addEventListener("mousewheel", function(){
   square1.style.backgroundColor = "orange";
})

