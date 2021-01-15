// Append H1:

var h1 = document.createElement("h1")
h1.textContent = "Hello World"
document.body.append(h1)

//  For Loop ( Repeat):


for (var i = 0; i < 10; i++)
{
    var h1 = document.createElement("h1")
    h1.textContent = "Hello World"
    document.body.append(h1)
     
    
}
document.body.style.color = "red";

// Create Array loop Thru:


const names = ["steve", "joe", "shirley","steph", "steph","nate" ,"rick", "emily"]

for(i = 0; i < names.length; i++ ){
var h1 = document.createElement("h1")
h1.textContent = names[i]
document.body.append(h1)
}
