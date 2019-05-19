/* Defining Table
Input: Get name of user
Processing: using the name from the imput, display the scripture that contains the user's first name.
Output: Personalized scripture */

function Address () {
	//input
let state= document.getElementById("state").value;
let city= document.getElementById("city").value;
let zipcode= document.getElementById("zipcode").value;
	//processing
let address = city +", "+ state + " " +zipcode ;
	
//output
document.getElementById ("output").innerHTML = address
}