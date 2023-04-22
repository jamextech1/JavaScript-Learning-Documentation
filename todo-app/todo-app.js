const addForm = document.querySelector(".add");
const todos = document.querySelector(".todos");
const searchTodo = document.querySelector(".search");
//
// submitting todo
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todoText = addForm.add.value.trim();
  if (todoText.length) {
    userDetails(todoText);
  }
  addForm.reset();
});
//
// todo template
const userDetails = (todoText) => {
  const html = `
   <li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <span>${todoText}</span>
          <i class="far fa-trash-alt delete"></i>
        </li>
  `;
  todos.innerHTML += html;
};
// deleting todo
todos.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});
//
// searching and filtering todos
searchTodo.addEventListener("keyup", (e) => {
  const term = searchTodo.search.value.trim().toLowerCase();
  e.preventDefault();
  filteredTodo(term);
});
//
// const newFilteered todos
const filteredTodo = (term) => {
  Array.from(todos.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add("filtered"));
  Array.from(todos.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove("filtered"));
};
