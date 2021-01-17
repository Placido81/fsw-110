
/*
function display(val){
    document.getElementById("button").value+=val ;
}
function solve()
{
let b = document.getElementById("plus").value
let a = eval(b)
document.getElementById("plus").value = a
}
function clr()
{
document.getElementById("plus").value = ""
}*/
let input1 = document.getElementById("test")



let input2 = document.getElementById('test1')

let button1 = document.getElementById("submit1")
button1.addEventListener("click", function(){
    var add = Number(input1.value) + Number(input2.value)
var h1 = document.createElement("h1")
h1.textContent = add
let mark = document.getElementById("mark")
mark.append(h1)
})


