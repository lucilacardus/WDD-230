/* Defining Table
Input: The program will randomly create two positive integers of max values of 100 and display those integers along with the addition symbol (+) and then allow a child to enter the answer.
Processing: The program should compute the correct answer and compare it to the child’s answer 
Output: Display correct foot wear for the day’s weather */

const MAX = 100;
let firstNumber = Math.floor(Math.random() * Math.floor(MAX));
document.getElementById('firstNumber').innerHTML = firstNumber;

let secondNumber =  Math.floor(Math.random() * Math.floor(MAX));
document.getElementById('secondNumber').innerHTML = secondNumber;

function checkAnswer(){
	let firstNumber = parseInt(document.getElementById('firstNumber').innerHTML);
	let secondNumber = parseInt(document.getElementById('secondNumber').innerHTML);
	
let answerkey = firstNumber + secondNumber;
	let answer = parseInt(document.getElementById('answer').value);
	let message = "";
	
if(answer == answerkey) {
		message = "Correct! Good job."
		 }
else { 
message= "Sorry. That is incorrect.";
}
	
document.getElementById('result').innerHTML = message;
}

	