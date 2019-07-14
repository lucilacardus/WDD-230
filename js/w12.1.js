/*input: Create a random array
Processing: get values from the random array and add ends
Output: Displays the random array and the sum of its ends*/


function createArray() {
	let array = [];
	let arrayList = "";
	let size = Math.floor(Math.random() * 20 + 1);

	for (let i = 0; i < size; i++) {
		array[i] = Math.floor(Math.random() * 100 + 1);

		if (i != size - 1) {
			arrayList += array[i] + ", ";
		} else {
			arrayList += array[i];
		}
	}

	document.getElementById("arrayList").innerHTML = "Array: [" + arrayList + "]";

	let endSum = addEnds(array);

	document.getElementById("result").innerHTML =
		"The sum of the ends of the array is: " + endSum;
}
function addEnds(list) {
	let result = list[0] + list[list.length - 1];
	return result;
}
