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
// just playing 😂
let todos = [
  {
    id: 1,
    day: "Monday",
    task: "Meet with boss",
    status: "Completed",
  },
  {
    id: 2,
    day: "Tuesday",
    task: "Dentist Appt",
    status: "Completed",
  },
  {
    id: 3,
    day: "Wednesday",
    task: "Code",
    status: "Not Completed",
  },
];
// USING FOR LOOP
// for (let i = 0; i < todos.length; i++) {
//   console.log(`This is task number ${todos[i].id} which is ${todos[i].task}`);
// }

//
// USING FOR OF LOOP
// for (todo of todos) {
//   console.log(`This is task number ${todo.id} which is ${todo.task}`);
// }
//
