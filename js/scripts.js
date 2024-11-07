const menuIcon = document.getElementById("menu-icon");
const menu = document.getElementById("menu");

menuIcon.addEventListener("click", function () {
  menu.classList.toggle("show");
});

//Login

const username = document.getElementById("username");
const password = document.getElementById("password");
const button = document.getElementById("button");

document.addEventListener("DOMContentLoaded", function () {
  fetch("/componentes/footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer").innerHTML = data;
    })
    .catch((error) => console.error("Error al cargar el footer:", error));
});
