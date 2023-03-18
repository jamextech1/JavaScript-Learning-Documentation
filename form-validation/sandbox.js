const form = document.querySelector(".signup-form");
const feedback = document.querySelector(".feedback");
const usernameInput = document.querySelector("#username");
const usernamePattern = /^[a-zA-Z]{6,12}$/;
// const username = document.querySelector("#username")
form.addEventListener("submit", formSubmit);
function formSubmit(e) {
  e.preventDefault();
  //
  const username = form.username.value;

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
  e.preventDefault();
  // console.log(e.target.value, form.username.value);
  if (usernamePattern.test(e.target.value)) {
    feedback.textContent = "Successful";
    usernameInput.classList.add("form--success");
    usernameInput.classList.remove("form--failed");
  } else {
    feedback.textContent = "Not Successs";
    usernameInput.classList.add("form--failed");
    usernameInput.classList.remove("form--success");
  }
});
