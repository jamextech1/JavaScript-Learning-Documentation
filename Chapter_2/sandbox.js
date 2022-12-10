// // COMMON STRING METHODS
// let email = "mario@thenetninja.co.uk";
// // let result = email.lastIndexOf("n");
// // let result = email.slice(2, 5);
// // let result = email.substr(4, 10);
// // let result = email.replace("m", "w");
// let result = email.replace("n", "w");
// console.log(result);

// NUMBERS
// we can use number variables to store age, year.
// let radius = 10;
// const pi = 3.14;
// console.log(radius, pi);

// what we can do with numbers

/* Maths operations like:
+ : for addition,
- : for substraction,
* : for multiplication,
/ : for divison,
** : to the power of,
% : for remainder.

*/
// EG:

// console.log(10 / 2);

// let result = radius % 3;
/* so this 👆🏽 takes the radius value, then divides it by 3 and give us the remainder. */

// let result = pi * radius ** 2;
/* so this 👆🏽 takes the value of pi, multiply it by the value of radius and give us the square of the answer, that is to say piRsquare */

// ORDER OF OPERATION - B I D M A S
// which helps us to solve complex maths with code and sometimes in real life.

/* 
B : Bracket,
I : Indices which is ** etc,
D: Division,
M: Multiplication,
A: Addition,
S: Substraction.
*/
// for instance, if a maths like these below is given to use

// let result = 5 * (10 - 3) ** 2;
/* first of all we perform the bracket calculation, which is the first on the B I D M A S */
// so inside the bracket, 10 - 3 is 7,
// then we look for the next in line which is the indices, so 7 square 2 which is 49,
//then we look for next step in line, which is division of which none is in the question, then Multiplication which is in the question, so we say 5 * 49, which is 245 final answer.
// console.log(result);

// OTHER BASIC CALCULATION
let likes = 10;
// likes = likes + 1;
/* this 👆🏽 adds 1 to the likes */
// but there's easier way to do it, and that is
likes++;
console.log(`your total likes is ${likes} in number`);
