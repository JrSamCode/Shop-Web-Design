let loadMoreBtn = document.querySelector('#load-more');
let currentItem = 8;


    console.log(currentItem);

loadMoreBtn.onclick = () => {
    let boxes = [...document.querySelectorAll('.box')]
    console.log(boxes);
    for(var i = currentItem; i < currentItem + 4; i++){
        boxes[i].style.display = "inline-block";

    }
    currentItem += 4;
    if(currentItem >= boxes.length){
        loadMoreBtn.style.display = 'none';
    }

    console.log(boxes.length);
    console.log(currentItem);


    
}

//carrito
const carrito = document.getElementById('carrito');
const elementos1 = document.getElementById('lista-1');
const lista = document.querySelector('#lista-carrito tbody');
const vaciarcarritoBtn = document.getElementById('vaciar-carrito');


cargarEventListeners();

function cargarEventListeners() {
    elementos1.addEventListener('click', compraElemento);
    carrito.addEventListener('click',eliminarElemento);
    vaciarcarritoBtn.addEventListener('click',varciarcarrito);
}


function compraElemento(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemento(elemento);
    }
}



function leerDatosElemento(elemento){
    const infoElemento = {
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').textContent,
        precio: elemento.querySelector('.precio').textContent,
        id: elemento.querySelector('a').getAttribute('data-id')
    }
    insertarCarrito(infoElemento);
}
function insertarCarrito(elemento) {
    // Verificar si el producto ya está en el carrito
    const filas = lista.getElementsByTagName('tr');
    // Obtiene una referencia al modal y al botón de cierre
const modal = document.getElementById("myModal");
const closeModal = document.getElementById("closeModal");

for (let i = 0; i < filas.length; i++) {
    const idProductoEnCarrito = filas[i].querySelector('a.borrar').getAttribute('data-id');
    if (idProductoEnCarrito === elemento.id) {
        // En lugar de la alerta, muestra el modal
        modal.style.display = "block";

        // Cierra el modal cuando se hace clic en el botón de cierre
        closeModal.onclick = function() {
            modal.style.display = "none";
        }

        // Cierra el modal cuando se hace clic fuera de él
        window.onclick = function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        }

        return;
    }
}


    // Si el producto no está en el carrito, agregarlo
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>
            <img src="${elemento.imagen}" width=100 height=150px>
        </td>
        <td>
            ${elemento.titulo}
        </td>
        <td>
            ${elemento.precio}
        </td>
        <td>
            <a href="#" class="borrar" data-id="${elemento.id}">x</a>
        </td>
    `;

    lista.appendChild(row);
}

const menu = document.querySelector('.menu');
const container = document.querySelector('.container');

// Agrega un evento para detectar el scroll
window.addEventListener('scroll', function () {
    // Verifica la posición del scroll
    if (window.scrollY > 0) {
        menu.classList.add('scrolled');
        container.classList.add('scrolled');  // Agrega la clase 'scrolled' cuando se desplaza hacia abajo
    } else {
        menu.classList.remove('scrolled'); 
        container.classList.remove('scrolled');
        // Elimina la clase 'scrolled' cuando se encuentra en la parte superior
    }
});

// function insertarCarrito(elemento){

  

    
//     const row = document.createElement('tr');
//     row.innerHTML = `
//         <td>
//             <img src="${elemento.imagen}" width=100 height=150px>
//         </td>
//         <td>
//             ${elemento.titulo}
//         </td>
//         <td>
//             ${elemento.precio}
//         </td>
//         <td>
//             <a href="#" class="borrar" data-id="${elemento.id}">x</a>
//         </td>
//     `;
//     lista.appendChild(row);

// }

function eliminarElemento(e){
    e.preventDefault();
    let elemento,
        elementoId;
    if(e.target.classList.contains('borrar')){
        e.target.parentElement.parentElement.remove();
        elemento = e.target.parentElement.parentElement;
        elementoId = elemento.querySelector('a').getAttribute('data-id');

    }
}

function varciarcarrito(){
    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }
    return false;
}


// let loadMoreBtn = document.querySelector('#load-more');
// let currentItem = 8;

// loadMoreBtn.onclick = () => {
//     let boxes = [...document.querySelectorAll('.box')];
//     for (var i = currentItem; i < currentItem + 4; i++) {
//         if (boxes[i]) { // Verificar si existe un elemento para mostrar
//             boxes[i].style.display = "inline-block";
//         } else {
//             loadMoreBtn.style.display = 'none'; // Ocultar el botón si no hay más elementos
//             break; // Salir del bucle si no hay más elementos
//         }
//     }
//     currentItem += 3;
// }
