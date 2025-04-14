document.addEventListener("DOMContentLoaded", function () {

    const btnCarrito = document.getElementById("btnCarrito");
    const carrito = document.querySelector(".main__carr");

    const btnMenu = document.getElementById("btnMenu");
    const menu = document.querySelector(".main__rightMenu");
    const btnCerrarMenu = document.querySelector(".main__rightMenu--close");

    const botonesAgregar = document.querySelectorAll('.main__products--product-btn');

    btnCarrito.addEventListener("click", function () {
        // Verificamos si el carrito está visible
        const carritoRight = carrito.style.right;

        if (carritoRight === "0px" || carritoRight === "0") {
            carrito.style.right = "-200%"; // Ocultar
            console.log("Carrito ocultado");
        } else {
            carrito.style.right = "0"; // Mostrar
            console.log("Carrito mostrado");
        }
    });

    btnMenu.addEventListener("click", function () {
        const menuLeft = menu.style.left;
        if (menuLeft === "0px" || menuLeft === "0") {
            menu.style.left = "-200%";
            console.log("Menú ocultado");
        } else {
            menu.style.left = "0";
            console.log("Menú mostrado");
        }
    });

    btnCerrarMenu.addEventListener("click", function () {
        menu.style.left = "-200%";
        console.log("Menú cerrado");
    });

    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', function () {
            const producto = this.closest('.main__products--product');
            const nombre = producto.querySelector('.main-products__product--title').textContent;
            const talla = producto.querySelector('.main-products__product--size').textContent;
            const precio = producto.querySelector('.main-products__product--price').textContent;
            const imagen = producto.querySelector('.main-products__product--img').getAttribute('src');

            const productoCarrito = document.createElement('div');
            productoCarrito.classList.add('main__carr--product');

            productoCarrito.innerHTML = `
                <img src="${imagen}" alt="" class="main__carr__product--img">
                <p class="main__carr__product--title">${nombre}</p>
                <p class="main__carr__product--size">${talla}</p>
                <p class="main__carr__product--price">${precio}</p>
                <i class="main__carr--deleted--icone">
                    <img src="img/icono_quitar.png" alt="Icono Quitar" class="main__carr--deleted--img">
                </i>
            `;
    
            carrito.appendChild(productoCarrito);
            actualizarContadorCarrito();

            console.log(`Producto insertado: ${nombre}`);
        });
    });

    carrito.addEventListener('click', function (event) {
        if (event.target.classList.contains('main__carr--deleted--img')) {
            const productoAEliminar = event.target.closest('.main__carr--product');
            if (productoAEliminar) {
                productoAEliminar.remove();
                console.log("Producto eliminado del carrito");
                actualizarContadorCarrito();
            }
        }
    });

    function actualizarContadorCarrito() {
        const productos = carrito.querySelectorAll(".main__carr--product");
        const contador = document.getElementById("carritoContador");
    
        contador.textContent = productos.length;
    }
});