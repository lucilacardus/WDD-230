/* Defining Table
Input: Get current temperature and current wind speed  in Fahrenheit from the user/
Processing: Determine IF we can define the wind chill factor based upon the maximum temperature constraint (50°F) and minimum wind speed constraint (3 mph). If the input parameters do not meet those constraints, then the function should return "N/A" which means "Not Applicable".
Output: the wind chill factor in Fahrenheit or NA if apliable */

function doInputOutput() {
	//input
	let temperature = parseFloat(document.getElementById("temperature").value);
	let windSpeed = parseFloat(document.getElementById("speed").value);

	let answer = windChill(temperature, windSpeed);

	document.getElementById("output").innerHTML = answer;
}

function windChill(tempF, speed) {
	if ((tempF > 50) || (speed < 3)) {
		let result = "N/A";
		return result ;
	}
	
	else {
		let result = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speed, 0.16) + 0.4275 * tempF * Math.pow(speed, 0.16);
		return result.toFixed(2) + " F&deg";
	}
}
