
function pruebaCarrito() {
const miLocalStorage = window.localStorage;
let carritoShop = JSON.parse(miLocalStorage.getItem('carrito'));
$("#items--cargados").html(carritoShop.length);
}
pruebaCarrito();


