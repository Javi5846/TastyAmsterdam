
function pruebaCarrito() {
const miLocalStorage = window.localStorage;
let carrito = JSON.parse(miLocalStorage.getItem('carrito'));
$("#items--cargados").html(carrito.length);
}
pruebaCarrito();
