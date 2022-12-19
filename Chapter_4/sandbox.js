// FUNCTION DECLARATION : this is setting up a function normally and calling it out.
// function greet() {
//   console.log(`Hello there`);
// }

// FUNCTION EXPRESSION
// now this is a function expression,  also we don't need to give the functoion a name because the function name is already the variable. Also, at the end of every expression there's always a semi colon, so that's why this function's curly brackets has a semi colon at the end.

// so basically function expression is just storing a function as a variable.
// const speak = function () {
//   console.log(`good day!`);
// };
// calling function
// greet();
// greet();
// greet();
//
//
// speak();
// speak();
// speak();

// Using function declaration, you can call your functions before or after the function command code, WHILE: using a function expression, you can only call your function after the function command code.
//
// Argument and Parameters
// const speak = function (name = "Mario", time = "Night") {
//   console.log(`Good ${time} ${name}`);
// };
// speak();
//
//
// function myApp() {
//   let myArrays = ["James", "John", "Doe", "Mario"];
//   for (let i = 0; i < myArrays.length; i++) {
//     switch (myArrays[i]) {
//       case "Doe":
//         continue;
//     }
//     console.log(`My Name is ${myArrays[i]}`);
//   }
// }
// myApp();
//
// RETURNING VALUES
// const calcArea = function (radius) {
//   return 3.14 * radius ** 2;
// };
// const area = calcArea(5);
// console.log(area);
//
// ARROW FUNCTIONS
