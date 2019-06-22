/* Defining Table
Input: Get a positive integer from 1 to 10 inclusive from the user/
Processing: calculates the times table from 1 to 12
Output: Display the  times table from 1 to 12 of the positive integer that the user entered*/

function timesTable() {
	//input
	let j = parseFloat(document.getElementById("integer").value);
	let output = "";
	let i;
	//processing

	for (let i = 1; i <= 12; i++) {
		output += j + " x " + i + "= " + j * i + "<br>";
	}
	document.getElementById("output").innerHTML = output;
}
