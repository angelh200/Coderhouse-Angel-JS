// Hace un request de la lista de productos y los inserta en la página
function crearProducto(producto) {
    return `
            <div class="card">
              <div class="d-flex justify-content-between p-3">
                <p class="lead mb-0">Top</p>
              </div>
              <img
                      src=${producto.imagen}
                      class="card-img-top"
                      alt="Celular"
              />
              <div class="card-body">
                <div class="d-flex justify-content-between">
                  <p class="small"><a href="#!" class="text-muted">Celulares</a></p>
                  <p class="small text-danger">ID: ${producto.id}</p>
                </div>

                <div class="d-flex justify-content-between mb-3">
                  <h5 class="mb-0">${producto.nombre}</h5>
                  <h5 class="text-dark mb-0">$${producto.precio.toFixed(2)}</h5>
                </div>

                <div class="d-flex justify-content-between mb-2">
                  <p class="text-muted mb-0">Disponible: <span class="fw-bold">${producto.stock}</span></p>
                  <div class="ms-auto text-warning">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                </div>
                <div class="d-flex justify-content-center">
                  <button class="btn btn-primary btn-compra">Comprar</button>
                </div>
              </div>
            </div>
    `;
}

async function loadProducts() {
    const response = await fetch('./data.json');
    const productos = await response.json();

    const contenedor = document.getElementById('product-container');
    productos.forEach((producto) => {
        const elemento = document.createElement('div');
        elemento.classList.add("col-md-12", "col-lg-4", "mb-4", "mb-lg-0", "my-4");
        elemento.innerHTML = crearProducto(producto);
        contenedor.appendChild(elemento);
    });
    // Agrega los eventos a los botones de compra de los prroductos
    addEventProductos(productos);
}

loadProducts();

// Crea un nueco carrito de compras
let carrito = new Carrito();

