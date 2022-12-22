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
//
//
//
//
//
// ADDING METHOD TO THE OBJECT LITERALS
/*let user = {
  name: "crystal",
  age: 30,
  email: "crystal@thennetninja.co.uk",
  location: "berlin",
  blogs: [
    {
      title: "why mac & cheese rules",
      likes: 30,
    },
    {
      title: "10 things to make with marmite",
      likes: 50,
    },
  ],
  logIn: function () {
    console.log("This user has login");
  },
  logOut: function () {
    console.log("This user has logout");
  },
  logBlogs() {
    // the best way to call out the blog in this user object, is by using the 'this' keyword.
    // using the normal command.
    // console.log(user.blogs);
    //
    // using the 'this' keyword
    console.log(`This user has written the following blogs:`);
    this.blogs.forEach((blog) => {
      console.log(`${blog.title} with ${blog.likes} likes`);
    });
  },
};*/
// user.logBlogs();
// user.logIn();
// user.logOut();
//
//
//
//
//
// MATH OBJECT
/*console.log(Math);
console.log(Math.PI);
console.log(Math.E);
const area = 7.7;
console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));*/
// GENERATING RANDOM NUMBERS USING MATH OBJECT
/*const random = Math.random();
console.log(random);
//
// generating radom number between 0 and 1
console.log(Math.round(random));
//
// generating random number between 0 and 100
console.log(Math.round(random * 100));*/
//
//
//
//
//
// PRIMITIVE VALUES
//
/*let scoreOne = 50;
let scoreTwo = scoreOne;
console.log(`scoreOne: ${scoreOne}, scoreTwo: ${scoreTwo}`);
scoreOne = 100;
console.log(`scoreOne: ${scoreOne}, scoreTwo: ${scoreTwo}`);*/
//
//
// Reference values
//
/*const userOne = { name: "ryu", age: 30 };
const userTwo = userOne;
console.log(userOne, userTwo);
userOne.age = 40;
console.log(userOne, userTwo);*/
