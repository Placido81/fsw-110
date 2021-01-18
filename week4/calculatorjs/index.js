// ADD + :
let input1 = document.getElementById("test")

let input2 = document.getElementById('test1')

let button = document.getElementById("submit1")
button.addEventListener("click", function(){
    let add = Number(input1.value) + Number(input2.value)
let mark = document.createElement("mark")
mark.textContent = add
let plus1= document.getElementById("plus1")
mark.append(plus1)
})
/*
//Minus - :
let input2 = document.getElementById("test2")

let input3 = document.getElementById("test3")
let button1  = document.getElementById("submit2")
button1.addEventListener("click", function(){
    var sub = Number(input2.value) - Number(input3.value)
    var dog = document.createElement("dog")
    dog.textContent = sub
    let mark1 = document.getElementById("mark1")
    dog.append(mark1)


})

let input4 = document.getElementById("test4")

let input5 = document.getElementById("test5")
let button2  = document.getElementById("submit3")
button2.addEventListener("click", function(){
    var mul = Number(input4.value) * Number(input5.value)
    var john = document.createElement("john")
    john.textContent = mul
    let mark2 = document.getElementById("mark2")
    john.append(mark2)

}
*/