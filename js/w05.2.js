/* Defining Table
Input: Get number of regular hours and employee’s gross pay from the user
Processing: calculate that employee’s net wage after tax pay
Output: Display net wage after tax pay */

function myNetPay () {
	//input
let hours= parseFloat(document.getElementById("hours").value);
let grosspay= parseFloat(document.getElementById("grosspay").value);
	//processing

let netPay = hours* grosspay * 0.85;
let netPayrounded = netPay.toFixed(2);
	
//output
document.getElementById ("output").innerHTML = netPayrounded +" USD"
}