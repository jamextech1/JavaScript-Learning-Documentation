// filter method
/*const scores = [10, 30, 15, 25, 50, 40, 5];
const filtered_scores = scores.filter((score) => {
  return score > 20;
});
console.log(filtered_scores);
const users = [
  { name: "shaun", premium: true },
  { name: "yoshi", premium: false },
  { name: "mario", premium: false },
  { name: "chun-li", premium: true },
];
const premium_users = users.filter((user) => user.premium);
console.log(premium_users);*/
//
//
// Map method
/*const prices = [20, 10, 30, 25, 15, 40, 80, 5];
const saleprices = prices.map((price) => price / 2);
console.log(saleprices);
const product = [
  { name: "gold star", price: 20 },
  { name: "mushroom", price: 40 },
  { name: "green shells", price: 30 },
  { name: "banana skin", price: 10 },
  { name: "red shells", price: 50 },
];
const salesproducts = product.map((product) =>
  product.price > 20 ? product.price / 2 : product.price
);
console.log(salesproducts);*/
//
//
// Reduce method
// const scores = [10, 20, 60, 40, 70, 90, 30];
// const results = scores.reduce((acc, curr) => {
//   if (curr > 50) {
//     acc++;
//   }
//   return acc;
// }, 0);
// console.log(results);
//
/*const scores = [
  { player: "mario", score: 50 },
  { player: "yoshi", score: 30 },
  { player: "mario", score: 70 },
  { player: "crystal", score: 60 },
];
const newScore = scores.reduce((acc, curr) => {
  if (curr.player === "mario") {
    acc += curr.score;
  }
  return acc;
}, 0);
console.log(newScore);*/

//
//
// Find method
/*const scores = [10, 5, 0, 40, 90, 10, 20, 70];
const ascore = scores.find((score) => {
  if (score > 45) {
    return find;
  }
});
console.log(ascore);*/
//
//
// Sort method
const scores = [10, 5, 0, 40, 90, 10, 20, 70];
