/*Input: Array with  integers
Processing: A function named multiply multiplies each element in an array by some value
Output: Display the initial array and an array composed by the elements of the orifinal array multiplied by some value.
*/

function newMultiply() {
	let list = [8, 9, 1, 20, 21, 12, 15, 24, 28, 60];
	let factor = 2;
	document.getElementById("array").innerHTML = list.toString();
	document.getElementById("factor").innerHTML = factor;
	document.getElementById("output").innerHTML = multiply(list, factor);
}

function multiply(list, multiplier) {
	let products = "";
	for (i = 0; i < list.length; i++) {
		let answer = list[i] * multiplier;
		products += answer + ", ";
	}
	return products;
}
