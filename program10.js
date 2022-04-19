//Write a program in JS that prints all the prime numbers between m and n and also find their sum
let m = parseInt(prompt("Enter the lower limit"));
let n = parseInt(prompt("Enter the upper limit"));
document.writeln("The prime numbers between" + m + "and" + n + "are: ");
let num = "";
for (let i = m; i <= n; i++) {
    let flag = 0;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }
    if (i > 1 && flag == 0) {
        num += i + "<br>"
    }
}
document.getElementById("demo").innerHTML = num;