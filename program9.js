//Write a program in JS that prints all the even numbers between 15 and 80 and also find their sum.
let sum = 0;
for (i = 15; i <= 80; i++) {
    if (i % 2 === 0) {
        sum += i;
        console.log(i);
    }
}
console.log("sum is: " + sum);
