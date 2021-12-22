/*
  Function
  - Anonymous Function
  - Calling Named Function vs Anonymous Function
  - Argument To Other Function
  - Task Without Name
  - SetTimeout
*/

let calculator = (num1, num2) => num1 + num2;

console.log(calculator(10, 20));

function sayHello() {
    console.log("Hello Osama");
}

document.getElementById("show").onclick = sayHello;

setTimeout(function elzero() {
    console.log("Good");
}, 2000);