function validarFormulario(event) {
  event.preventDefault();

  const nombre = document.getElementById("userName").value.trim();
  const password = document.getElementById("password").value.trim();

  // Expresion
  const nombreRegex = /^[A-Za-z0-9_]+$/; // Permite letras, numeros y guion bajo
  if (!nombre || !nombreRegex.test(nombre)) {
    document.getElementById("userError").textContent =
      "Por favor, ingresa un nombre de usuario válido (solo letras, números y guiones bajos).";
    return;
  }

  // Validacion de la contraseña
  if (!password || password.length < 11) {
    document.getElementById("passwordError").textContent =
      "La contraseña debe tener al menos 11 caracteres.";
    return;
  }

  // Todo ok
  alert("Inicio de sesión exitoso.");
}

// Asignar el evento de validación al formulario
document
  .getElementById("loginForm")
  .addEventListener("submit", validarFormulario);
