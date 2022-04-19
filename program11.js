//WAP to print all the numbers from m to n that are divisible by 2 and 5 both.
let m = parseInt(prompt("Enter the lower limit"));
let n = parseInt(prompt("Enter the upper limit"));
let num = "";
for (let i = m; i <= n; i++) {
    if ((i % 2 == 0) && (i % 5 == 0)) {
        num += +i
    }
}
document.getElementById("demo").innerHTML = "The numbers divisible by 2 and 5 are: " + num;