
//NavBar:
var navbar = document.createElement("navbar")
document.body.append(navbar)

var a = document.createElement("a")
a.textContent = "Home"
a.id = "red"
a.href = "https://www.google.com"
navbar.append(a)

var a = document.createElement("a")
a.textContent = "Images"
a.id = "blue"
navbar.append(a)

var a = document.createElement("a")
a.textContent = "About"
a.id = "purple"
navbar.append(a)
  

//Header:
var h1 = document.createElement("h1")
h1.textContent = "Learning to Code can be Tricky!"
document.body.append(h1)

// Paragraph:
 var p = document.createElement("p")
 p.textContent = "When you First start out Coding can be Tricky and Frustraiting at times! It's all Worth It!!"
 document.body.append(p)

//Oder List with Header:
 var h2 = document.createElement("h2")
 h2.textContent = "Javascript Syntax"
 document.body.append(h2)
 
 var ol = document.createElement("ol")
 document.body.append(ol)

 var li = document.createElement("li")
 li.textContent = "Objects"
 ol.append(li)
 
 var li = document.createElement("li")
li.textContent = "Strings"
ol.append(li)

var li = document.createElement("li")
li.textContent = "Variables"
ol.append(li)
 
var li = document.createElement("li")
li.textContent = "Function"
ol.append(li)

var li = document.createElement("li")
li.textContent = "Boolean"
ol.append(li)
 
//Footer:
var h4 = document.createElement("h4")
h4.textContent = "Practices Makes Perfect"
document.body.append(h4)

var footer = document.createElement("footer")
footer.textContent = "If you Don't Practice you will Never get Better at Coding."
document.body.append(footer)
 