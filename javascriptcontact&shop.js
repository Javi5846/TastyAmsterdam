/*Agregado de eventos*/

/*Formulario en Contact muestra por consola quien es, su numero de tel y la consulta*/

let miFormulario      = document.getElementById("myform");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    let formulario = e.target
    console.log(formulario.children[0].value + " " +"ha enviado una consulta."); 
    console.log("Su número de contacto es:"+ " " +formulario.children[1].value);  
    console.log("Consulta:" + formulario.children[2].value)
}

function avisoDeJs() {
    alert("Ups !! En breve se habilitara el carrito de compras !!!");
  }

/*Cuando hacen click en add to cart en los items de shop*/   

let intentoDeCompra = document.getElementById("item1");
intentoDeCompra.onclick = () => { console.log("se ha intentado comprar.");}
let intentoDeCompra2 = document.getElementById("item2");
intentoDeCompra2.onclick = () => { console.log("se ha intentado comprar.");}