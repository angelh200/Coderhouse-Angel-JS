
function addEventProductos(productos) {
    let btnCompras = document.getElementsByClassName('btn-compra');
    // Añade el evento de compra para todos los botones de los productos
    for (let i = 0; i < btnCompras.length; i++) {
        btnCompras[i].addEventListener('click', () => {
            Swal.fire({
                icon: 'success',
                title: 'Compra exitosa',
                text: `Se añadio tu ${productos[i].nombre} correctamente al carrito de compras.`,
                imageUrl: productos[i].imagen
            });
            carrito.addProducto(productos[i]);
            let contadorProductos = document.getElementById('contador-productos');
            contadorProductos.innerText = carrito.cantidadProductos();
        });
    }
}

let verCarrito = document.getElementById('btnCarrito');
verCarrito.addEventListener('click', () => {
    // selecciona el elemento texto del modal
    let modalProductos = document.getElementById('lista-productos');
    modalProductos.innerHTML = carrito.imprimirProductos() + `<h2>Total</h2><div class="alert alert-danger">$${carrito.precioTotal()} USD</div>`;
});