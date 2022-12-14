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
// let i = 0;
// do {
//   console.log("in loop", i);
//   i++;
// } while (i < 5);
//
//
// CONDITIONALS IF, ELSE, ELSE IF.
//
// if statement
//
// let age = 25;
// if (age > 20) {
//   console.log("You're above 20 years old");
// }
//
// else statement
//
// let pass = "pass";
// if (pass.length >= 8) {
//   console.log("Your password is long enough");
// } else {
//   console.log("Your password is not long enough");
// }
//
//
// else if statement
//
// let pass = "passwor";
// if (pass.length >= 12) {
//   console.log("Your password is mighty strong one");
// } else if (pass.length >= 8) {
//   console.log("Your password is long enough");
// } else {
//   console.log("Your password is not long enough");
// }
//
// LOGICAL OPERATORS OR || and AND &&
//
const password = "p@ass";

if (password.length >= 12 && password.includes("@")) {
  console.log(`Your password is mighty strong`);
} else if (
  password.length >= 8 ||
  (password.includes("@") && password.length > 5)
) {
  console.log(`That password is strong enough`);
} else {
  console.log(`password is not strong enough`);
}
