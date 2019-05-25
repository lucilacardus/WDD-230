/* Defining Table
Input: Get radius and height of the cylinder from the user
Processing: calculate the volume and convert it to liters
Output: Display the volume of the cylinder in liters */

function volumeofCilinder () {
	//input
let radius= parseFloat(document.getElementById("radius").value);
let height= parseFloat(document.getElementById("height").value);
	//processing

let volume = Math.PI * Math.pow(radius,2) * height / 61.024;
let volumerounded = volume.toFixed(2);
	
//output
document.getElementById ("output").innerHTML = volumerounded + " L"
}