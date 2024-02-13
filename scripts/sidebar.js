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
            contentElement.innerHTML =  '<h1>Ahora vas a ver lo que pasa con los objetos window</h1><h3>Prueba cada uno de los métodos indicados en la barra de la izquierda</h3>';
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
                let respuesta = window.confirm("Tienes cita con el dentista mañana a las 12.00. ¿Te los sigo recordando?");
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
            contentElement.innerHTML =  '<h2>Información de pantalla</h2>' +'<div class="pantalla-info">'+ infoNavegador + '</div>';
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
    
