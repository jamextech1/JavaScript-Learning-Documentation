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
// let likes = 10;
// likes = likes + 1;
/* this 👆🏽 adds 1 to the likes */
// but there's easier way to do it, and that is
/*likes++;
console.log(`your total likes is ${likes} in number`);*/
//
//
// TEMPLATE STRINGS Aslo called (Template literal)
// const title = "Best reads of 2019";
// const author = "Mario";
// const likes = 30;
//
//
//
// CONCATENATION WAY
// let result =
//   "The blog called " + title + " By " + author + " has " + likes + " likes";
// console.log(result);
//
//
//
// TEMPLATE STRING WAY
// let result = `The blog called ${title} by ${author} has ${likes} likes`;
// console.log(result);
//
//
//
// CREATIN HTML TEMPLATES
// let result = `
// <h2>${title}</h2>
// <p>By ${author}</p>
// <span>Has ${likes} likes</span>
// `;
// console.log(result);

//
//
//
//
// ARRAYS: This is used to store multiple strings, numbers, etc, and to start, you need to input your array values into a squared brackets []. E.g;
// let ninjas = ["shaun", "ryu", "chun-li"];
// getting arrays
/*console.log(ninjas);*/
// getting single value inside arrays
/*console.log(ninjas[1]);*/
// overidding a value inside an array
/*ninjas[1] = "ken";
console.log(ninjas);*/
//
// ARRAYS WITH NUMBER VALUES
//
//We can store different data types inside an array
//
// let ages = [20, 25, 30, 35];
// console.log(ages[2]);

//
//
// MIXING NUMBERS AND STRINGS INSIDE AN ARRAY
// let random = ["shaun", "crystal", 30, 20];
// console.log(random[1]);
//
// ARRAY METHODS
// let ninjas = ["shaun", "ryu", "chun-li"];
// JOIN: this takes the array values and join them together into one single strings, but sepearted by the symbols inputed into the argument. e.g: - , etc
// let result = ninjas.join(",");
//
// indexOf: This get the index of the particular value assigned in the argument inside the array.
// let result = ninjas.indexOf("chun-li");
//
// Concat: this is used to join another multiple arrays inside the existin array, just like concatenatin a strings.
// let result = ninjas.concat(["ken", "crystal"]);
//
// PUSH: this pushes a new value into the array
// let result = ninjas.push("ken");
//
// POP: this removes the last value inside an array
// result = ninjas.pop();
// console.log(ninjas);
//
// BOOLEAN
// let email = "luigi@thenetninja.co.uk";
// let names = ["mario", "luigi", "toad"];
// let result = names.includes("luigi");
// console.log(result);
//
//
// LOOSE VS STRICT COMPARISONS
// e.g of loose comparisons

// let age = 25;
// console.log(age == 25);
// console.log(age == "25");
// console.log(age != 25);
// console.log(age != "25");
//
// e.g of strict comparisons
// console.log(age === 25);
// console.log(age === "25");
// console.log(age !== 25);
// console.log(age !== "25");
//
//
// TYPE CONVERSION: This is basically coverting a data type to another data type, e.g converting a string to numnber.
// let score = "100";

// score = Number(score);
// console.log(score + 1);
// // checking the type of data type
// console.log(typeof score);
//
// converting string to number
//
let result = Number("hello"); /* which will display as not a number */
console.log(result);
