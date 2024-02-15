const sidebar = document.querySelector('.sidebar');
const content = document.querySelector('.content');
const resizeHandle = document.querySelector('.resize-handle');


    let isResizing = false;

    //De aquí recogemos la propiedad que establece el width del sidebar: offsetWidth
    console.log("propiedades del sidebar: ", sidebar);

    //Guardamos esa propiedad en una variable
    let initialSidebarWidth = sidebar.offsetWidth;

    //Definimos el ancho maximo del sidebar (70% de la anchura de la ventana)
    const maxSidebarWidth = 600;

    //Definimos el ancho minimo del sidebar (10% de la anchura de la ventana)
    const minSidebarWidth = 266;

    //pasamos por parámetro el propio objeto del evento, que contiene varias propiedades
    resizeHandle.addEventListener("mousedown", (e) => {
    isResizing = true;

    e.preventDefault(); //evitar el comportamiento por defecto del navegador(en este caso deja de seleccionar el texto mientras se deja pulsado el ratón)

    const startX = e.clientX; //posición inicial del ratón

    //Aplicamos un evento al documento que se dispara cuando se mueve el ratón
    document.addEventListener("mousemove", (e) => {
        if (!isResizing) return;

        //Si el ratón se mueve, calculamos la distancia entre el punto inicial (startX) y el nuevo punto (e.clientX)
        const deltaX = e.clientX - startX;

        let newSidebarWidth = initialSidebarWidth + deltaX;

        if (newSidebarWidth > maxSidebarWidth) {
        newSidebarWidth = maxSidebarWidth;
        } else if (newSidebarWidth < minSidebarWidth) {
        newSidebarWidth = minSidebarWidth;
        }

        sidebar.style.width = `${newSidebarWidth}px`;
        content.style.width = `calc(100%)`; //Es redundante
        /* sidebar.style.width = `${
        newSidebarWidth > maxSidebarWidth ? maxSidebarWidth : newSidebarWidth
        }px`; //Lo mismo de arriba pero con una ternaria*/
        });

    document.addEventListener('mouseup', () => {
    isResizing = false;

    //actualiza el ancho inicial del sidebar cuando se suelta el click

    initialSidebarWidth = sidebar.offsetWidth;
    })

});

