//Write a program to calculate total marks and percentage obtained by the student.
let p = 76;     //physics
let c = 78;     //chemistry
let b = 65;     //biology
let m = 90;     //mathematics
let cs = 85;    //computer
let total_marks;
total_marks = p + c + b + m + cs;
console.log(total_marks);
let percentage;
percentage = (total_marks / 500) * 100;
console.log(percentage);

if (percentage >= 85) {
    console.log("Grade: S");
}
if (85 > percentage >= 75) {
    console.log("Grade: A")
}
if (75 > percentage >= 65) {
    console.log("Grade: B")
}
if (65 > percentage >= 55) {
    console.log("Grade: C")
}
if (55 > percentage >= 50) {
    console.log("Grade: D")
}
if(percentage<50){
    console.log("Fail");
}

