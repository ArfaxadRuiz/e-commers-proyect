document.addEventListener("DOMContentLoaded", function () {

    const btnCarrito = document.getElementById("btnCarrito");
    const carrito = document.querySelector(".main__carr");

    const btnMenu = document.getElementById("btnMenu");
    const menu = document.querySelector(".main__rightMenu");
    const btnCerrarMenu = document.querySelector(".main__rightMenu--close");

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

    btnMenu.addEventListener("click", function () {
        const menuLeft = menu.style.left;
        if (menuLeft === "0px" || menuLeft === "0") {
            menu.style.left = "-100%";
            console.log("Menú ocultado");
        } else {
            menu.style.left = "0";
            console.log("Menú mostrado");
        }
    });

    btnCerrarMenu.addEventListener("click", function () {
        menu.style.left = "-100%";
        console.log("Menú cerrado");
    });
});