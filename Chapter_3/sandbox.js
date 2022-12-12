// CONTROL FLOW E.G: loops, conditionals i.e if statements, else and else if statements.
//
// FOR LOOPS
//
// for (let i = 0; i < 5; i++) {
//   console.log("In loop:", i);
// }
// console.log("Loop finished");
//
//
// const names = ["shaun", "mario", "luigi"];
// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }
//
//
//
//WHILE LOOP
// const names = ["shaun", "mario", "luigi"];
// let i = 0;
// while (i < names.length) {
//   console.log(names[i]);
//   i++;
// }
//
//
//DO WHILE LOOP
let userInput = prompt("Enter Hello");
let i = 0;
while (i < userInput.valueOf) {
  if (userInput === "Hello") {
    console.log(`Your input is ${userInput}, and it\'s successful`);
  } else if (userInput === "") {
    console.log(`You haven\'t made any selection`);
  } else {
    console.log(`Your input is ${userInput} and it\'s invalid!!`);
  }
  i++;
  console.log(userInput[i]);
}
