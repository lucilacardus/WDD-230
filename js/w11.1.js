/* Defining Table
Input:Get Amount invested, annual rate, number of years and periods per year from the user./
Processing: Compute the future value of an investment is using the following formula:
  f = a (1 + r)n
where f is the future value, a is the investment amount sometimes called the principal, r is the growth rate per period, and n is the total number of periods throughout the life of the investment.
Output: displays the result to the user */

function doFV() {
	//input
	let principal = parseFloat(document.getElementById("principal").value);
	let annualRate = parseFloat(document.getElementById("rate").value);
	let years = parseFloat(document.getElementById("years").value);
	let periodsPerYear = parseFloat(document.getElementById("periods").value);
	let answer = computeFutureValue(principal, annualRate, years, periodsPerYear);

	document.getElementById("output").innerHTML = answer;
}

function computeFutureValue(principal, annualRate, years, periodsPerYear) {
	let result =
		principal * Math.pow(1 + annualRate / periodsPerYear, periodsPerYear * years);
	return result.toFixed(2);
}
