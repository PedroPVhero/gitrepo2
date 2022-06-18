var input1 = document.getElementById("input1").value();
var input2 = document.getElementById("input2").value();
var soma = input1 + input2;
var txt = document.createTextNode(soma)
document.getElementById("h3").appendChild(txt);