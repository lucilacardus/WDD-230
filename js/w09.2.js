/* Defining Table
Input: Get data from Table
Processing: Run a loop to discover which is the oldest temple
Output: Display oldest temple for the user to see.*/


//Input
let table = document.getElementById("templeData");
let ayear = parseInt(table.rows[1].cells[1].innerHTML);
let temple = table.rows[1].cells[0].innerHTML;
console.table(table)

parseInt(table.rows[1].cells[1].innerHTML);
//Processing
for (let i = 1; i < table.rows.length; i++) { 
let year = parseInt(table.rows[i].cells[1].innerHTML);
if (ayear > year) {
ayear = year
temple = table.rows[i].cells[0].innerHTML;
}
}


//Output
document.getElementById("output").innerHTML = temple;