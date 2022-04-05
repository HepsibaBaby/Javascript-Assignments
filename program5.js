//WAP to calculate area and perimeter of rectangle if length and breadth are 20 and 35 respectively
let l = 20;         //length
let b = 35;         //breadth
let area = l * b;
console.log(area);
let perimeter = 2 * (l + b);
console.log(perimeter);
if (area > perimeter) {
    console.log("area is greaterthan perimeter")
}
else {
    console.log("perimter is greaterthan area");
}
