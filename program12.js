
function even() {
    let x = window.prompt("Enter a number:");
    if (x % 2 == 0) {
        alert("It is an even number");
    }
    else {
        alert("It is an odd number");
    }
    document.getElementById("btn1").click;

}

function simple() {
    let p = parseInt(prompt("Enter principal amount"));
    let r = parseInt(prompt("Enter rate"));
    let n = parseInt(prompt("Enter time"));
    let si = (p * r * n) / 100;
    alert(si);
}
document.getElementById("btn2").click;
