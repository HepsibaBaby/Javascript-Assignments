//Write a JS code that takes distance in Kilometer from user (via prompt box) and convert it in meters, feet, inches, and centimeters
let km = window.prompt("enter distance");
document.getElementById("demo").innerHTML = km;
let meter = km * 1000;
console.log(meter + " meter");
let feet = km * 3280.8
console.log(feet + " feet");
let inch = km * 39370;
console.log(inch + " inch");
let cm = km * 100000;
console.log(cm + " cm"); 


