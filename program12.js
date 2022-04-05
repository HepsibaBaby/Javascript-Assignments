let num = window.prompt("Enter a number:");
if (num % 2 == 0) {
    window.alert("It is an even number");
}
else {
    window.alert("It is an odd number");
}
document.getElementById("demo").innerHTML = document.getElementById("btn1").num;

let p = window.prompt("Enter principal amount");
let r = window.prompt("Enter rate");
let t = window.prompt("Enter time");
let si = (p * r * t) / 100;
window.alert(si);
document.getElementById("btn2").innerHTML = num;
