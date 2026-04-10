document.addEventListener('DOMContentLoaded', () => {
    const listaCarrito = document.getElementById('lista-carrito');
    const listaCarritoOffcanvas = document.getElementById('lista-carrito-offcanvas');

    const agregarProducto = (nombreProducto) => {
        // Elimina el mensaje de "No hay productos" si está presente
        if (listaCarrito.children.length === 1 && listaCarrito.children[0].textContent === 'No hay productos') {
            listaCarrito.innerHTML = '';
        }
        if (listaCarritoOffcanvas.children.length === 1 && listaCarritoOffcanvas.children[0].textContent === 'No hay productos') {
            listaCarritoOffcanvas.innerHTML = '';
        }

        // Crea el nuevo elemento de la lista del carrito
        const nuevoProducto = document.createElement('li');
        nuevoProducto.classList.add('list-group-item');
        nuevoProducto.textContent = nombreProducto;

        const nuevoProductoOffcanvas = document.createElement('li');
        nuevoProductoOffcanvas.classList.add('list-group-item');
        nuevoProductoOffcanvas.textContent = nombreProducto;

        // Agrega el producto a ambas listas
        listaCarrito.appendChild(nuevoProducto);
        listaCarritoOffcanvas.appendChild(nuevoProductoOffcanvas);

        // Agrega la clase 'agregado' para la animación
        nuevoProducto.classList.add('agregado');
        nuevoProductoOffcanvas.classList.add('agregado');

        // Elimina la clase después de 1 segundo
        setTimeout(() => {
            nuevoProducto.classList.remove('agregado');
            nuevoProductoOffcanvas.classList.remove('agregado');
        }, 1000);
    };

    // Esta es la función que te faltaba
    const vaciarCarrito = () => {
        listaCarrito.innerHTML = '<li class="list-group-item text-muted text-center">No hay productos</li>';
        listaCarritoOffcanvas.innerHTML = '<li class="list-group-item text-muted text-center">No hay productos</li>';
    };

    // Agrega los eventos de clic a todos los botones "Comprar"
    const botonesComprar = document.querySelectorAll('.btn-success');
    botonesComprar.forEach(boton => {
        boton.addEventListener('click', (e) => {
            const nombreProducto = e.target.closest('.card-body').querySelector('.card-title').textContent;
            agregarProducto(nombreProducto);
        });
    });

    // Agrega el evento de clic al botón "Vaciar Carrito" en ambas ubicaciones
    const botonVaciarPrincipal = document.querySelector('.card-body .btn-danger');
    const botonVaciarOffcanvas = document.querySelector('.offcanvas-body .btn-danger');

    if (botonVaciarPrincipal) {
        botonVaciarPrincipal.addEventListener('click', vaciarCarrito);
    }

    if (botonVaciarOffcanvas) {
        botonVaciarOffcanvas.addEventListener('click', vaciarCarrito);
    }
});