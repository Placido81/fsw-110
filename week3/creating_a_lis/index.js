// Append H1:

var h1 = document.createElement("h1")
h1.textContent = "Hello World"
document.body.append(h1)

//  For Loop ( Repeat):

var i = "Hello World";
for (var i = 0; i < 10; i++)
{
    var h1 = document.createElement("h1")
    h1.textContent = "Hello World"
    document.body.append(h1)
    console.log("hello world")  
    
}
document.body.style.color = "red";

// Create Array loop Thru:
const names = [" steve", "larry", "joe", "shirley", "steph", "rick", "emily" ]
for ( const emily of names ){
    console.log(emily);
}