/* Defining Table
Input: User selects type of shoes
Processing: search for the correct result acording to the input from user
Output: Display correct foot wear for the day’s weather */

function weather() {
	//input
let weatherinput = document.getElementById('weatherinput').value;
let result;
	//processing
if (weatherinput =="hot"){
result = "Sandals";	
}
else if (weatherinput=="rain"){
result = "Galoshes";	
}
else if (weatherinput=="snow"){
result = "Boots";		
}
else if (weatherinput=="cool"){
result = "Shoes";	
}

  //output		
document.getElementById ("myButton").innerHTML = result;
}