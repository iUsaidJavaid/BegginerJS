var text = document.getElementById("t1");
var Username = document.getElementById("nameId");
var Useremail = document.getElementById("emailId");
var button = document.getElementById("b1");

var table = document.getElementById("myTable");
var rows = document.getElementById("myTable").getElementsByTagName("tr");
var rowLength = rows.length;
console.log(rowLength);




button.addEventListener("click", function f1() {
    rows = document.getElementById("myTable").getElementsByTagName("tr");
    rowLength = rows.length;
    var row = table.insertRow(rowLength);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = Username.value;
    cell2.innerHTML = Useremail.value;
});