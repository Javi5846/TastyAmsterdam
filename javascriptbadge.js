$("#items--cargados").html('No Items');
 
function pruebaCarrito() {
    const miLocalStorage = window.localStorage;
    let carrito = JSON.parse(miLocalStorage.getItem('carrito'));
    if (carrito.length !=0) {
    $("#items--cargados").html(carrito.length);}
}
pruebaCarrito();
