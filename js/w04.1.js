/* Defining Table
Input: Get name of user
Processing: using the name from the imput, display the scripture that contains the user's first name.
Output: Personalized scripture */

function Scripture() {
	//input
let name= document.getElementById("name").value;
	//processing
let scripture = "I, " + name + ", said unto my father:" + 
" I will go and do the things which the Lord hath commanded, for I know that the Lord giveth no commandments unto the children of men, save he shall prepare a way for them that they may accomplish the thing which he commandeth them.";
	
    //output
document.getElementById ("output").innerHTML = scripture
}