const arrows = document.querySelectorAll('.arrow');
    console.log(arrows);
    // Itera sobre cada flecha y agrega un evento de clic
    arrows.forEach(arrow => {
      arrow.addEventListener('click', function () {
        const subMenu = this.parentElement.nextElementSibling; // El submenú asociado a la flecha
        subMenu.classList.toggle('show');
        this.classList.toggle('rotate-arrow');


      });
    });
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
