
/*
==========
- Definimos las variables
==========
*/
const sidebar = document.querySelector('.sidebar');
const button = document.querySelector('.toggler-btn');
const closeButton = document.querySelector('.close-btn');
const openButton = document.querySelector('.open-btn');


/*
==========
- Función para cambiar el estado de la barra de navegación. 
- Aprovechamos la clase "d-none" de Bootstrap para ocultar o mostrar los iconos.
==========
*/
function toggleSideBar(){
    if (sidebar.classList.contains('hidebar')) {
        sidebar.classList.remove('hidebar');
        openButton.classList.add('d-none');
        closeButton.classList.remove('d-none');
        return 'cerrado';
    } else {
        sidebar.classList.add('hidebar');
        openButton.classList.remove('d-none');
        closeButton.classList.add('d-none');
        return 'abierto';
    }
}

function checkViewportSideBar() {
    if (window.matchMedia("(max-width: 1200px)").matches) {
        sidebar.classList.add('hidebar');
        openButton.classList.remove('d-none');
        closeButton.classList.add('d-none');
    } else {
        sidebar.classList.remove('hidebar');
        openButton.classList.add('d-none');
        closeButton.classList.remove('d-none');
    }
}

function desktopSidebar() {
    if (window.matchMedia("(min-width: 1200px)").matches) {
        sidebar.classList.remove('hidebar');
    }
}


/*
==========
- Invocamos la función cuando hacemos click en el botón.
==========
*/
window.addEventListener('load', desktopSidebar);
window.addEventListener('resize', checkViewportSideBar);
button.addEventListener('click', toggleSideBar);
