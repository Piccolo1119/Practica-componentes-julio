class LoginComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="navbar">
                <img src="/images/logomaiztransparente.ico" alt="Logo de la empresa" class="logo">
                <ul class="nav-links">
                    <li><a href="#">Inicio de mi Cuaderno de Entorno Servidor</a></li>
                </ul>
                <img src="/images/burger.png" alt="menu-hamburguesa" class="hamburger">
                <a href="/login.html"><img src="/images/loginbien-Photoroom.png-Photoroom.png" alt="carrito" class="login"></a>
            </header>
            <main>
                <div class="login-formulario">
                    <form id="formulario">
                        <h2>Ingresa en la aplicación</h2>
                        <div class="form-group">
                            <label for="name">Nombre:</label>
                            <input type="text" id="name" name="name">
                            <div class="error-message" id="nameError"></div>
                        </div>
                        <div class="form-group">
                            <label for="email">Correo Electrónico:</label>
                            <input type="text" id="email" name="email">
                            <div class="error-message" id="emailError"></div>
                        </div>
                        <div class="form-group">
                            <label for="password">Contraseña:</label>
                            <input type="password" id="password" name="password">
                            <div class="error-message" id="passwordError"></div>
                        </div>
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </main>
            <style>
                @import "/styles/style-login-formulario.css";
                @import "/styles/style-header.css";
            </style>
        `;

        document.forms[0].addEventListener("submit", (e) => {
            e.preventDefault();
          
            //Validar campo nombre
            const entradaNombre = document.getElementById("name");
            const errorNombre = document.getElementById("nameError");
            let verificado = [];
          
            if (entradaNombre.value.trim() === "") {
              errorNombre.textContent = "Por favor, introduce tu nombre";
              errorNombre.classList.add("error-message");
              verificado.push(false);
            } else {
              errorNombre.textContent = "";
              errorNombre.classList.remove("error-message");
              verificado.push(true);
            }
          
            //Validar correo electronico
            const emailEntrada = document.getElementById("email");
            const emailError = document.getElementById("emailError");
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          
            if (!emailPattern.test(emailEntrada.value)) {
              emailError.textContent =
                "Por favor, introduce un correo electronico valido";
              emailError.classList.add("error-message");
              verificado.push(false);
            } else {
              emailError.textContent = "";
              emailError.classList.remove("error-message");
              verificado.push(true);
            }
          
            //Validar contraseña
            const contrasenyaEntrada = document.getElementById("password");
            const contrasenyaError = document.getElementById("passwordError");
            const contrasenyaPattern =
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,30}$/;
            if (!contrasenyaPattern.test(contrasenyaEntrada.value)) {
              contrasenyaError.textContent =
                "Por favor, introduce una contraseña valida, debe tener entre 8 y 15 caracteres, al menos una letra mayúscula, una letra minúscula, un número y un caracter especial";
              contrasenyaError.classList.add("error-message");
              verificado.push(false);
            } else {
              contrasenyaError.textContent = "";
              contrasenyaError.classList.remove("error-message");
              verificado.push(true);
            }
          
            //Si todos los campos son correctos, enviar el formulario
            if (verificado.includes(false) === false) {
              window.location.href = "index.html";
            }
          });
    }
}

window.customElements.define('login-component', LoginComponent);
