const form = document.querySelector('.signup-form')
// const username = document.querySelector("#username")
form.addEventListener('submit', formSubmit)
function formSubmit(e) {
  e.preventDefault();
  // console.log(username.value)
  console.log(form.username.value)
}