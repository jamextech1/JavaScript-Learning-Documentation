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
const names = ["shaun", "mario", "luigi"];
let i = 0;
while (i < 5) {
  let html = `<div>${names[i]}</div>`;
  console.log(html);
  i++;
}
