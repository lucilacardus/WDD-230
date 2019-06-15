/* Defining Table
Input: Get an integer from the user/
Processing: calculates the sum of all the odd integers between 1 and then integer that the user inputted, inclusive
Output: Display the sum of all the odd integers between 1 and then integer that the user inputted, inclusive */

function numberGuessGame() {
	let message =
		"I'm thinking of a number between 1 and 100.\n" +
		"Try to guess it!\n" +
		"Please enter an integer between 1 and 100.";
	let answer = 38;
	let i = 0;
	let guess;
	let result;
	do {
		guess = parseInt(prompt(message));
		if (guess < answer) {
			message = guess + " is too low. Please enter another integer.";
		} else if (guess > answer) {
			message = guess + " is too high. Please enter another integer.";
		}
		i++;
	} while (guess != answer);
	{
		result = guess + " is correct!";
	}

	document.getElementById("output").innerHTML = result;
	document.getElementById("correct").innerHTML =
		"You took " + i + " times to guess.";
}
