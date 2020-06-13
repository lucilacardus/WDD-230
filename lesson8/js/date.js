function toggleMenu() {
    document.getElementsByClassName("navigation") [0].classList.toggle("responsive");

    
}

let daynames = [ "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

let date = new Date();
let dayName = daynames[date.getDay()];
let monthName = months[date.getMonth()];
let fulldate = dayName + ", " + date.getDate() + " " + monthName + " " + date.getFullYear();

document.getElementById("currentdate").textContent = fulldate;