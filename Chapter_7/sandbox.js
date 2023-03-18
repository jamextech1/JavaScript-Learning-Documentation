const form = document.querySelector(".signup-form");
// const username = document.querySelector("#username")
form.addEventListener("submit", formSubmit);
function formSubmit(e) {
  e.preventDefault();
  // console.log(username.value)
  console.log(form.username.value);
}
//
//
// testing regex
const username = "shaunp";
const pattern = /^[a-z]{6}$/;
// let result = pattern.test(username);
// console.log(result);
// if (result) {
//   console.log("result passed :)");
// } else {
//   console.log("result failed :(");
// }
let result = username.search(pattern);
console.log(result);
