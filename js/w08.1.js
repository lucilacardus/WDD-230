/* Defining Table
Input: Get an integer from the user/
Processing: calculates the sum of all the odd integers between 1 and then integer that the user inputted, inclusive
Output: Display the sum of all the odd integers between 1 and then integer that the user inputted, inclusive */

function sumIntegers() {
	//input
	let x = parseFloat(document.getElementById("integer").value);
	let result = 0;
	//processing

	for (let i = 1; i <= x; i++) {
		if (i % 2 != 0) {
			result += i;
		}
	}

	//output
	document.getElementById("output").innerHTML = result;
}

	