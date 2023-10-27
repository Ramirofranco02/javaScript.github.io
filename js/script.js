document.addEventListener("DOMContentLoaded", () =>  {
    const listaProductos = document.getElementById("lista-productos");
    const listaCarrito = document.getElementById("lista-carrito");
    const totalElement = document.getElementById("total");
    const vaciarCarritoBtn = document.getElementById("vaciar-carrito");

    // Productos disponibles
    const productos = [
        { id: 1, nombre: "Camiseta Nike", precio: 29.99 },
        { id: 2, nombre: "Zapatillas Adidas", precio: 79.99 },
        { id: 3, nombre: "Pantalones Levi's", precio: 49.99 },
        { id: 4, nombre: "Gorra New Era", precio: 19.99 },
        { id: 5, nombre: "Reloj Casio", precio: 39.99 },
    ];

    // Event listeners para productos
    mostrarProductos();

    // Event listener para vaciar carrito
    vaciarCarritoBtn.addEventListener("click", vaciarCarrito);

    function mostrarProductos() {
        productos.forEach(producto => {
            const li = document.createElement("li");
            li.innerHTML = `${producto.nombre} - $${producto.precio}
            <input type="number" min="1" value="1">
            <button class="agregar-carrito" data-id="${producto.id}">Agregar al Carrito</button>`;
            listaProductos.appendChild(li);
        });
    }

    // Función para agregar producto al carrito
    function agregarProducto(producto, cantidad) {
        const li = document.createElement("li");
        li.innerHTML = `${producto.nombre} - $${producto.precio} x ${cantidad}`;
        listaCarrito.appendChild(li);

        // Calcular y actualizar total
        let total = parseFloat(totalElement.textContent);
        total += producto.precio * cantidad;
        totalElement.textContent = total;

        // Guardar carrito en JSON en el almacenamiento local
        guardarCarritoEnLocalStorage();
    }

  // ...

// Event listener para productos
listaProductos.addEventListener("click", e => {
    if (e.target.classList.contains("agregar-carrito")) {
        const productoId = parseInt(e.target.getAttribute("data-id"));
        const producto = productos.find(p => p.id === productoId);
        const cantidad = parseInt(e.target.previousElementSibling.value);
        if (producto && cantidad > 0) {
            agregarProducto(producto, cantidad);
        }
    }
});

// Función para vaciar carrito
function vaciarCarrito() {
    while (listaCarrito.firstChild) {
        listaCarrito.removeChild(listaCarrito.firstChild);
    }
    
    totalElement.textContent = "0";

    // Vaciar carrito en el almacenamiento local
    localStorage.removeItem("carrito");
}

// Event listener para el botón de "Vaciar Carrito"
vaciarCarritoBtn.addEventListener("click", vaciarCarrito);

// Función para guardar el carrito en el almacenamiento local como JSON
function guardarCarritoEnLocalStorage() {
    const productosCarrito = Array.from(listaCarrito.children).map(item => item.textContent.trim());
    localStorage.setItem("carrito", JSON.stringify(productosCarrito));
}

// Función para cargar carrito desde el almacenamiento local
function cargarCarritoDesdeLocalStorage() {
    const carrito = localStorage.getItem("carrito");
    if (carrito) {
        const productosCarrito = JSON.parse(carrito);
        productosCarrito.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            listaCarrito.appendChild(li);
        });
    }
}

// Mostrar productos al cargar la página
mostrarProductos();

// Cargar carrito desde el almacenamiento local al cargar la página
cargarCarritoDesdeLocalStorage();
});