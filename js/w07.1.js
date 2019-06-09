/* Defining Table
Input: Get customer’s subtotal pay from the user
Processing: calculate  if the subtotal is greater than $50 and today is Tuesday or Wednesday, subtract 10% from the subtotal.  Then, compute and output the total amount due by adding sales tax of 6% to the subtotal.
Output: Display subtotal */

function subtotal () {
	//input
let customer= parseFloat(document.getElementById("customer").value);
let dayOfWeek = new Date().getDay(); 
	
 
	//processing

if ((customer > 50) && (dayOfWeek == 2 || dayOfWeek == 3)){
	result = customer * 0.90 *1.06;	
	}
	
	else {
	result = customer *1.06;	
	}
	
//output
document.getElementById ("output").innerHTML = result +" USD"
}
	