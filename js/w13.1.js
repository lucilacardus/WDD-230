/*Input: Array with integers
Processing: A function named countEvens counts and returns the number of even integers in the array. 
Output: Display amount of even integers
*/

function programTester() {
	let numbers = [25, 12, 28, 258, 81, 1, 3];
	document.getElementById("array").innerHTML = numbers.toString();
	document.getElementById("output").innerHTML = countEvens(numbers);
}

function countEvens(list) {
	let evens = 0;
	for (i = 0; i < list.length; i++) {
		if (list[i] % 2 == 0) {
			evens++;
		}
	}
	return evens;
}
