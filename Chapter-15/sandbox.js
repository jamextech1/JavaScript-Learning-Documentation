/*
const userOne = {
  username: "ryu",
  email: "ryu@thenetninja.co.uk",
  login() {
    console.log("the user logged in");
  },
  logout() {
    console.log("the user logged out");
  },
};
console.log(userOne.email, userOne.username);
userOne.login();
const userTwo = {
  username: "chun-li",
  email: "chun-li@thenetninja.co.uk",
  login() {
    console.log("the user logged in");
  },
  logout() {
    console.log("the user logged out");
  },
};
console.log(userTwo.email, userTwo.username);
userTwo.login();
const userThree = ("shaun@thenetninja.co.uk", "shaun");
*/

class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
    this.score = 0;
  }
  login() {
    console.log(`${this.username} just logged in`);
    return this;
  }
  logout() {
    console.log(`${this.username} just logged out`);
    return this;
  }
  inScore() {
    this.score += 1;
    console.log(`${this.username} has a score of ${this.score}`);
    return this;
  }
}
class Admin extends User {
  constructor(username, email, title) {
    super(username, email);
    this.title = title;
  }
  deleteUser(user) {
    users = users.filter((u) => u.username !== user.username);
  }
}
const userOne = new User("mario", "mario@thenetninja.co.uk");
const userTwo = new User("luigi", "luigi@thenetninja.co.uk");
const userThree = new Admin(
  "shaun",
  "shaun@thenetninja.co.uk",
  "black-belt-ninja"
);
console.log(userOne, userTwo, userThree);

let users = [userOne, userTwo, userThree];
console.log(users);
userThree.deleteUser(userTwo);
console.log(users);
