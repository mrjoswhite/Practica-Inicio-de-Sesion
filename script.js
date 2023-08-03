document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente
  
    // Aquí puedes obtener los valores ingresados por el usuario
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
  
    // Aquí puedes verificar las credenciales del usuario
    if (username === "Josser" && password === "1131109487") {
      // Si las credenciales son válidas, redirige al usuario a otra página
      window.location.href = "dashboard.html";
    } else {
      // Si las credenciales no son válidas, muestra un mensaje de error al usuario
      alert("Credenciales inválidas. Inténtalo de nuevo");
    }
  
    // Puedes hacer una solicitud a tu base de datos o realizar otras acciones de autenticación aquí
  });