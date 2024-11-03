const menuIcon = document.getElementById("menu-icon");
const menu = document.getElementById("menu");

menuIcon.addEventListener("click", function () {
  menu.classList.toggle("show");
});

//LOGIN

const username = document.getElementById("username");
const password = document.getElementById("password");
const button = document.getElementById("button");

button.addEventListener("click", (e) => {
  e.preventDefault();
});
