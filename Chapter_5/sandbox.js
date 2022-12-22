// object literals
// in the object literal below, the name is the key, the value of the name is the value, and together it can be called the properties of the object literal.
// let user = {
//   name: "crystal",
//   age: 30,
//   email: "crystal@thennetninja.co.uk",
//   location: "berlin",
//   blog: ["why mac & cheese rules", "10 things to make with marmite"],
// };
// so this above code an example of object with it's properties.
// Noe, they're two way to call out a property in object literal, first is by using DOT NOTATION, while the second way is by using the SQUARED BARCKETS AND STRINGS, example below.
// using the dot notation
// console.log(user.name);
//
//
// using the dot squared bracket and double quotes
// console.log(user["name"]);
// overridding the values
// using the dot notation
// user.age = 35;
// console.log(user.age);
// using the squared bracket and double quotes
// user["age"] = 40;
// console.log(user["age"]);
// shwoing the typeof the object literals
// console.log(typeof user);
//
//
// ADDING METHOD TO THE OBJECT LITERALS
let user = {
  name: "crystal",
  age: 30,
  email: "crystal@thennetninja.co.uk",
  location: "berlin",
  blogs: ["why mac & cheese rules", "10 things to make with marmite"],
  logIn: function () {
    console.log("This user has login");
  },
  logOut: function () {
    console.log("This user has logout");
  },
  logBlogs: function () {},
};
user.logIn();
user.logOut();
