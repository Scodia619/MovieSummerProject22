const container = document.getElementById("container");
var newDiv = document.createElement("div");
var arr = ["1","1","1"];

arr.forEach(function(element){
    newDiv.innerHTML = element;
    container.appendChild(newDiv)
});