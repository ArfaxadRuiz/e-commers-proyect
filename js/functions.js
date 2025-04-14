document.addEventListener("DOMContentLoaded", function () {
    const btnCarrito = document.getElementById("btnCarrito");
    const carrito = document.querySelector(".main__carr");

    btnCarrito.addEventListener("click", function () {
        // Verificamos si el carrito está visible
        const carritoRight = carrito.style.right;

        if (carritoRight === "0px" || carritoRight === "0") {
            carrito.style.right = "-100%"; // Ocultar
            console.log("Carrito ocultado");
        } else {
            carrito.style.right = "0"; // Mostrar
            console.log("Carrito mostrado");
        }
    });
});