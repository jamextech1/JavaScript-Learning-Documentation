// DOM (Document Object Model)
// const para = document.querySelector("div.error");
// console.log(para);
// selecting all the p elements
const paras = document.querySelectorAll("p");
// just like an array we can aslo use forEach method
// e.g
paras.forEach((para) => {
  console.log(para);
});
//
const errors = document.querySelectorAll(".error");
errors.forEach((error) => {
  error.style = "color: red";
  error.style.fontFamily = "Josefin sans";
});
console.log(paras[0]);
