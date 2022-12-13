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
let characters = ["@", "#", "&"];
let password = "password";
if (password.length > 8 && password.includes(characters)) {
  console.log("Your password is very strong oo");
} else if (
  (password.length >= 5 && password.includes("$")) ||
  (password.length === 3 && password.includes(characters))
) {
  console.log("Your password is still strong anyway");
} else if (password.length > 5) {
  console.log("Your password is long but not strong enough");
} else {
  console.log(
    `Shey you dey whine me niiii, incrase password jaree stop using ${password.length} of password`
  );
}
