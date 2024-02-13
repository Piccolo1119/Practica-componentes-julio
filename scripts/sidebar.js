const arrows = document.querySelectorAll('.arrow');
    // Itera sobre cada flecha y agrega un evento de clic
    arrows.forEach(arrow => {
      arrow.addEventListener('click', function () {
        const subMenu = this.parentElement.nextElementSibling; // El submenú asociado a la flecha
        subMenu.classList.toggle('show');
        this.classList.toggle('rotate-arrow');
        
        const menuText = this.parentElement.querySelector('.menu-text').textContent;
        // Obtén el texto dentro del elemento con la clase .menu-text

        if (menuText.trim() === "Window Objects") {
            const contentElement = document.querySelector('.content');
            contentElement.innerHTML =  `<h1>Ahora vas a ver lo que pasa con los objetos window</h1><h3>Prueba cada uno de los métodos indicados en la barra de la izquierda</h3> <img src="/images/snoopDog.gif" alt="snoopDog">
            <h2>Aquí tienes los códigos.</h2>
        <div class="code-container">
        <code>function openWindow() {
            newWindow = window.open(" "," ", "width = 500px, height = 400px, left = 50px, top = 300px");
        }</code>
        <button onclick="copiarCodigo()">Copiar Código</button>
        </div>
        <script>
      function copiarCodigo() {
        var copyText = document.getElementById("code");
        navigator.clipboard.writeText(copyText.innerText);
     }</script>
    
     <div class="code-container">
        <code>function closeWindow() {
            newWindow.close();
        }</code>
        <button onclick="copiarCodigo()">Copiar Código</button>
        </div>
        <script>
      function copiarCodigo() {
        var copyText = document.getElementById("code");
        navigator.clipboard.writeText(copyText.innerText);
    </div>
     }</script>
     
     <div class="code-container">
        <code>function moveWindowTo() {
            newWindow.moveTo(500,300);
            newWindow.focus();
        }</code>
        <button onclick="copiarCodigo()">Copiar Código</button>
        </div>
        <script>
      function copiarCodigo() {
        var copyText = document.getElementById("code");
        navigator.clipboard.writeText(copyText.innerText);
    
     }</script>

     <div class="code-container">
        <code>function moveWindowTo() {
            newWindow.moveTo(500,300);
            newWindow.focus();
        }</code>
        <button onclick="copiarCodigo()">Copiar Código</button>
        </div>
        <script>
      function copiarCodigo() {
        var copyText = document.getElementById("code");
        navigator.clipboard.writeText(copyText.innerText);
    
     }</script>


     <div class="code-container">
        <code>function resizeWindow() {
            newWindow.resizeTo(1000,500);
            newWindow.focus();
        }</code>
        <button onclick="copiarCodigo()">Copiar Código</button>
        </div>
        <script>
      function copiarCodigo() {
        var copyText = document.getElementById("code");
        navigator.clipboard.writeText(copyText.innerText);
    
     }</script>


     <div class="code-container">
        <code>function scrollWindowBy() {
            newWindow.focus();
            newWindow.scrollBy(0,100);
        }</code>
        <button onclick="copiarCodigo()">Copiar Código</button>
        </div>
        <script>
      function copiarCodigo() {
        var copyText = document.getElementById("code");
        navigator.clipboard.writeText(copyText.innerText);
    
     }</script>

     <div class="code-container">
        <code>function printWindow() {
            newWindow.focus();
            newWindow.print();
        }</code>
        <button onclick="copiarCodigo()">Copiar Código</button>
        </div>
        <script>
      function copiarCodigo() {
        var copyText = document.getElementById("code");
        navigator.clipboard.writeText(copyText.innerText);
    
     }</script>

     <div class="code-container">
        <code>function promptWindow() {
            newWindow.focus();
            var result = newWindow.prompt("Introduce datos", "10");
            alert(result);
        }</code>
        <button onclick="copiarCodigo()">Copiar Código</button>
        </div>
        <script>
      function copiarCodigo() {
        var copyText = document.getElementById("code");
        navigator.clipboard.writeText(copyText.innerText);
    
     }</script>

     <div class="code-container">
        <code>function blurWindow() {
            newWindow.focus();
            newWindow.blur();
        }</code>
        <button onclick="copiarCodigo()">Copiar Código</button>
        </div>
        <script>
      function copiarCodigo() {
        var copyText = document.getElementById("code");
        navigator.clipboard.writeText(copyText.innerText);
    
     }</script>

     
     <div class="code-container">
        <code>function scrollWindow() {
            newWindow.focus();
            newWindow.scrollTo(0,newWindow.document.body.scrollHeight);
        }</code>
        <button onclick="copiarCodigo()">Copiar Código</button>
        </div>
        <script>
      function copiarCodigo() {
        var copyText = document.getElementById("code");
        navigator.clipboard.writeText(copyText.innerText);
    
     }</script>

     <div class="code-container">
        <code>function confirmWindow() {
            newWindow.focus();
            newWindow.confirm(":)");
        }</code>
        <button onclick="copiarCodigo()">Copiar Código</button>
        </div>
        <script>
      function copiarCodigo() {
        var copyText = document.getElementById("code");
        navigator.clipboard.writeText(copyText.innerText);
    
     }</script>




     <style>
        .code-container {
            padding: 10px;
            background-color: #f5f5f5;
            border: 1px solid #ccc;
            border-radius: 5px;
            margin-bottom: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }

        code {
            font-family: 'Courier New', Courier, monospace;
            font-size: 14px;
            background-color: #f9f9f9;
            padding: 5px;
            border: 1px solid #ccc;
            border-radius: 3px;
            display: block;
            margin-bottom: 10px;
        }
    </style>
`;
        // Aquí puedes hacer lo que necesites con el texto específico para "Window Objects"
        }

      });
    });


    //camara abrir, cerrar
    var cameraStream;

    function openCamara() {
        //Solicitar permisos para acceder a la camara
        navigator.getUserMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);

        if (navigator.getUserMedia) {
            navigator.getUserMedia({ video: true}, function (stream) {
                //mostrar el contendeor de la camara y establecer el flujo en el

                document.getElementById("contenedor").style.display = "block";
                document.getElementById('camaraFeed').srcObject = stream;
                cameraStream = stream;
            }, function(error) {
                console.log('No se pudo obtener acceso a la cámara: ', error);
            });
        } else {
            console.error('getUserMedia is not supported in this browser')
        }  
    }

    function closeCamara() {
        //detener la transmision de la camara y ocultar el contenedor
        if (cameraStream) {
            cameraStream.getTracks().forEach(function (track){
                track.stop();
                
            });
            document.getElementById("contenedor").style.display = "none";
        }
    }
   
    //ejercicio recordar cita dentista

    const relojitos = document.querySelectorAll('.arrow.reloj');

    // Itera sobre cada elemento y agrega un event listener
    relojitos.forEach(relojito => {
        relojito.addEventListener('click', () => {
            let identificador = window.setInterval(() => {
                let respuesta = window.confirm("Tienes clase mañana con Camilo. ¿Te lo sigo recordando?");
                if (respuesta === false) {
                    window.clearInterval(identificador);
                    console.log("Programa finalizado");
                } else {
                    console.log("Te lo sigo recordando");
                }
            });
        });
    });
    

    //info de pantalla 

    const infoPantallita = document.querySelectorAll('.arrow.pantalla');

    infoPantallita.forEach(pantalla => {
        pantalla.addEventListener('click', () => {
            let infoPantalla = "availHeight: " + screen.availHeight + "<br><br>";
            infoPantalla += "availWidth: " + screen.availWidth + "<br><br>";
            infoPantalla += "height: " + screen.height + "<br><br>";
            infoPantalla += "width: " + screen.width + "<br><br>";
            infoPantalla += "colorDepth:" +screen.colorDepth + "<br><br>";
            infoPantalla += "pixelDepth: " + screen.pixelDepth + "<br><br>";
            infoPantalla += "orientation: " + screen.orientation + "<br><br>";
            infoPantalla += "orientation: " + screen.orientation.type + "<br><br>";
        
            const contentElement = document.querySelector('.content');
            contentElement.innerHTML =  '<h2>Información de pantalla</h2>' +'<div class="pantalla-info">'+ infoPantalla + '</div>';
        })
    })


    const infoNavegador = document.querySelectorAll('.arrow.navegador');

    infoNavegador.forEach(pantalla => {
        pantalla.addEventListener('click', () => {
            let infoNavegador = "clipboard: " + navigator.clipboard + "<br>";
            infoNavegador += "cookieEnabled: " + navigator.cookiEnabled+ "<br>";
            infoNavegador += "geolocation: " + navigator.geolocation + "<br>";
            infoNavegador += "language: " + navigator.language + "<br>";
            infoNavegador += `onLine: ${navigator.onLine}`;
            infoNavegador += "plugins: " + navigator.plugins+"<br>";
            infoNavegador += "storage: " + navigator.storage+"<br>";
            infoNavegador += "userAgent: " + navigator.userAgent+"<br>";
            console.log(infoNavegador);

            const contentElement = document.querySelector('.content');
            contentElement.innerHTML =  '<h2>Información de navegador</h2>' +'<div class="pantalla-info">'+ infoNavegador + '</div>';
        })
    });


    var newWindow;

    function openWindow() {
        newWindow = window.open(" "," ", "width = 500px, height = 400px, left = 50px, top = 300px");    
    }

    function closeWindow() {
        newWindow.close();
    }

    function moveWindowTo() {
        newWindow.moveTo(500,300);
        newWindow.focus();
    }

    function resizeWindow() {
        newWindow.resizeTo(1000,500);
        newWindow.focus();
    }

    function scrollWindowBy() {
        newWindow.focus();
        newWindow.scrollBy(0,100);
    }

    function printWindow() {
        newWindow.focus();
        newWindow.print();
    }

    function promptWindow() {
        newWindow.focus();
        var result = newWindow.prompt("Introduce datos", "10");
        alert(result);
    }

    function blurWindow() {
        newWindow.focus();
        newWindow.blur();
    }

    function scrollWindow() {
        newWindow.focus();
        newWindow.scrollTo(0,newWindow.document.body.scrollHeight);
    }

    function confirmWindow() {
        newWindow.focus();
        newWindow.confirm(":)");
    }
    

    //juego adivinar numero

    
    const content = document.querySelector('.content');
    const juego = document.querySelectorAll('.arrow.juego');

juego.forEach(juego => {
    juego.addEventListener('click', () => {
        const numeroSecreto = Math.floor(Math.random() * 100) + 1;
        content.innerHTML = `
            <div class="pantalla-info">
                <h1>Adivina el número</h1>
                <p>Introduce un número entre 1 y 100:</p>
                <input type="number" id="numeroEntrada" min="1" max="100">
                <br><br><button id="button">Comprobar</button>
                <p id="mensaje"></p>
                <h4>Cantidad de intentos: <span id="intentos-input">0</span></h4>
            </div>`;

        const botonAdivinar = document.getElementById("button");
        const numEntrada = document.getElementById("numeroEntrada");
        const intentos = document.getElementById("intentos-input");

        botonAdivinar.addEventListener("click", () => {
            if (numEntrada.value > 100 || numEntrada.value < 1) {
                const parrafo = document.getElementById("mensaje");
                parrafo.textContent = `Pusiste ${numEntrada.value}. Intenta de nuevo. El número debe estar entre 1 y 100`;
                return;
            }

            if (parseInt(numEntrada.value) === numeroSecreto) {
                const parrafo = document.getElementById("mensaje");
                parrafo.textContent = `El número era ${numeroSecreto} y pusiste ${numEntrada.value}. Felicidades, has adivinado el número `;
                intentos.textContent = parseInt(intentos.textContent) + 1;
                botonAdivinar.disabled = true;
            } else {
                const parrafo = document.getElementById("mensaje");
                intentos.textContent = parseInt(intentos.textContent) + 1;
                if (parseInt(numEntrada.value) < numeroSecreto) {
                    parrafo.textContent = `El número secreto es mayor que ${numEntrada.value}.`;
                } else {
                    parrafo.textContent = `El número secreto es menor que ${numEntrada.value}.`;
                }
            }
        });
    });
});


    