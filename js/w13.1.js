/*input: Create a random array
Processing: get values from the random array and gets the middle of it
Output: Displays the random array and the middle of it*/
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

	let middle = getMiddle(array);

	document.getElementById("result").innerHTML =
		"The Middle Element of the array is: " + middle;
}
function getMiddle(list) {
	let result;

	if (list.length % 2 == 0) {
		let index = list.length / 2 - 1;
		result = (list[index] + list[index + 1]) / 2;
	} else {
		let index = parseInt(list.length / 2);
		result = list[index];
	}

	return result;
}
