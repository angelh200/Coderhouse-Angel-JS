class Carrito{
    constructor() {
        this.productos = []; // Array de objetos Producto
    }

    // Devuelve el monto total de los productos en el carrito
    precioTotal() {
        let total = 0;
        this.productos.forEach(producto => {
            total += producto.precio * producto.cantidad;
        });
        return total;
    }

    // Añade un obeto producto al carrito
    addProducto(producto) {
        if(this.existeProducto(producto)) {
            // Encuentra el producto en el array
            const index = this.productos.findIndex(elemento => {
                return elemento.id === producto.id;
            });
            this.productos[index].addStock(1);
        } else {
            const nuevoProducto = new Producto(producto.id, producto.nombre, 1, producto.precio)
            this.productos.push(nuevoProducto);
        }
    }

    quitarProducto(producto) {
        if(this.existeProducto(producto)) {
            const index = this.productos.findIndex(elemento => {
                return elemento.id === producto.id;
            });
            this.productos[index].addStock(-1);
        }
    }

    // Compruebe si ya existe un determinado producto en el carrito
    existeProducto(producto) {
        return this.productos.some(elemento => {
            return elemento.id === producto.id;
        })
    }

    imprimirProductos() {
        let msg = '';
        this.productos.forEach((producto, index) => {
            msg += `
              <p>
                ${index + 1}. ${producto.nombre}
                <span class="badge bg-primary">Cantidad: ${producto.cantidad}</span>
                <span class="badge bg-success"> Subtotal: ${producto.precio * producto.cantidad}</span>
              </p>
            `;
        });
        return msg;
    }

    cantidadProductos() {
        let cantidad = 0;
        this.productos.forEach(producto => {
            cantidad += producto.cantidad;
        });
        return cantidad;
    }
}