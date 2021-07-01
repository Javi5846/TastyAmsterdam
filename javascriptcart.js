
let preguntaComida = prompt ("Que plato de la sección Shop le gustaria pedir?")

let preguntaPago = prompt ("Desea pagar en efectivo?").toLowerCase();
while (preguntaPago == "" || (preguntaPago != "si" && preguntaPago!= "no")) {
  alert("Responda Si o No");
  preguntaPago = prompt ("Desea pagar en efectivo?").toLowerCase();
}

if (preguntaPago == "si") {
  alert("Entonces los precios tienen descuento !!!");
}
else if (preguntaPago == "no") {
  alert("Oh los precios son los detallados en el Shop, pero tienes delivery SIN cargo !!!");
}


let contenedor = document.createElement("div");
//Definimos el innerHTML del elemento con una plantilla de texto
contenedor.innerHTML = `<h3>Ha elejido: ${preguntaComida}</h3>
                        <p>  Desea pagar en efectivo? Ud ha dicho: ${(preguntaPago).toUpperCase()}, por lo tanto tiene un 10% de descuento !!!</p>
                        <b> En breve habilitamos el carrito de compras !!! Los esperamos !!! </b>`;
document.getElementById("container--cart").appendChild(contenedor);




