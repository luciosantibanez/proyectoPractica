function validarFormulario(event) {
    event.preventDefault(); 
  
    // Obtener los valores de los campos
    const nombre = document.getElementById("userName").value.trim();
    const password = document.getElementById("password").value.trim();
  
    // Limpiar los mensajes de error previos
    document.getElementById("userError").textContent = "";
    document.getElementById("passwordError").textContent = "";
  
    // Validación de usuario
    if (!nombre || nombre.length < 6) {
      document.getElementById("userError").textContent = "Por favor, ingresa un usuario válido (al menos 6 caracteres).";
      return;
    }
  
    // Validación de contraseña
    if (!password || password.length < 11) {
      document.getElementById("passwordError").textContent = "La contraseña debe tener al menos 11 caracteres.";
      return;
    }
  
    // Si todo está bien
    alert("Inicio de sesión exitoso.");
  }
  
  // Asignar el evento de validación al formulario
  document.getElementById("loginForm").addEventListener("submit", validarFormulario);
  