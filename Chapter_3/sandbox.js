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
// const password = "p@ass";

// if (password.length >= 12 && password.includes("@")) {
//   console.log(`Your password is mighty strong`);
// } else if (
//   password.length >= 8 ||
//   (password.includes("@") && password.length >= 5)
// ) {
//   console.log(`That password is strong enough`);
// } else {
//   console.log(`password is not strong enough`);
// }
//
//
// LOGICSL NOT  👉🏽 ! OPERATORS
// let user = false;
// if (!user) {
//   console.log("You must be logged in to continue");
// }
// console.log(!true);
// console.log(!false);
// // second check
// if ((user = !user)) {
//   console.log(`You must be ${user} to log in`);
// }
//
//
// Break and Continue (related to loop)
// let scores = [50, 25, 0, 30, 100, 20, 10];
// for (let i = 0; i < scores.length; i++) {
//   if (scores[i] === 0) {
//     continue;
//   }
//   console.log(`Your score is ${scores[i]}`);
//   if (scores[i] === 100) {
//     console.log(`Congrats, you got the Top score`);
//     break;
//   }
// }
// so the break statement there means that if the score reaches 100 (which is see as highest), then it should break the out from the loop,

// meanwhile the continue is just if the score is 0 then it should ignore the zero and move back to continue iteration.
