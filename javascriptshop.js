/*Agregado de eventos*/
/*Cuando hacen click en add to cart en los items de shop*/   

let intentoDeCompra = document.getElementById("item1");
intentoDeCompra.onclick = () => { console.log("se ha intentado comprar.");}
let intentoDeCompra2 = document.getElementById("item2");
intentoDeCompra2.onclick = () => { console.log("se ha intentado comprar.");}
function avisoDeJs() {
    alert("Ups !! En breve se habilitara el carrito de compras !!!");
  }