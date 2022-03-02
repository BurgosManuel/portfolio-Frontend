
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


/*
==========
- Invocamos la función cuando hacemos click en el botón.
==========
*/
button.addEventListener("click", toggleSideBar);
