/* Defining Table
Input: Get input from user computer’s clock
Processing: On all weekdays (Monday through Friday) that are not holidays, your program should output “Get up!” On all other days (weekends and holidays), your program should output “Sleep in.”  The three holidays that your program must check for are January 1 (New Year’s Day), July 4 (U.S. Independence Day), and December 25 (Christmas). 
Output: Display “Sleep in.” or “Get up!” */


	//input
	
	let dayOfWeek = new Date().getDay(); 
	let month = new Date().getMonth();
	let date = new Date().getDate();
	
		//processing
	
	if ((month == 1 && date == 1) || (month == 7 && date == 4) || (month == 12 && date == 25)		|| (dayOfWeek == 6) || (dayOfWeek == 0)){
		result = "Sleep in!";	
		}
		
		else {
		result = "Get up!";	
		}
		
	//output
	document.getElementById ("output").innerHTML = result
	