const form = document.querySelector(".signup-form");
const feedback = document.querySelector(".feedback");
// const username = document.querySelector("#username")
form.addEventListener("submit", formSubmit);
function formSubmit(e) {
  e.preventDefault();
  //
  const username = form.username.value;
  const usernamePattern = /^[a-zA-Z]{6,12}$/;
  //
  if (usernamePattern.test(username)) {
    // good feedback
    feedback.textContent = `Successful`;
  } else {
    // bad feed back
    feedback.textContent = `Not Successful`;
  }
  //
}
//
// live feedback
form.username.addEventListener("keyup", (e) => {
  console.log(e.target.value, form.username.value);
});
