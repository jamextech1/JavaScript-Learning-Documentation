// DOM (Document Object Model)
// const para = document.querySelector("div.error");
// console.log(para);
// selecting all the p elements
/*const paras = document.querySelectorAll("p");
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
console.log(paras[0]);*/
//
//
/*// get an element by id
const title = document.getElementById("page-title");
console.log(title);
//
//

// get an element by className
const errors = document.getElementsByClassName("error");
console.log(errors);
// you can't use forEach method on HTML collection
//
//
// // get an element by tagName
const paras = document.getElementsByTagName("p");
console.log(paras);*/
//
//
//
//
// Adding and chnaging content
/*const para = document.querySelector("p");
// innerText display the text inside the element we selected
// console.log(para.innerText);
// updating the innerText
para.innerText = "Ninjas are awesome";

const paras = document.querySelectorAll("p");
paras.forEach((para) => {
  para.innerText += " new text";
});*/
//
// Changing the html elements
//
const content = document.querySelector(".content");
// console.log(content.innerHTML);
// content.innerHTML += "<h2>This is a new h2</h2>";
//
//
const people = ["mario", "lugi", "yoshi"];
people.forEach((person) => {
  content.innerHTML += `<p>${person}</p>`;
});
