
class Comidas {
    constructor(id,plato, precio, variedad) {
        this.id = id;
        this.plato  = plato.toUpperCase();
        this.precio  = parseFloat(precio);
        this.variedad = variedad;
        this.vendido = false;
    }
    descuentoCash() {
        this.precio = (this.precio / 1.10).toFixed(2);
    }
  }
  const dishes = [];
  dishes.push(new Comidas(1,"Black Rice", "11", "española"));
  dishes.push(new Comidas(2,"Mushroom Croquets", "1.5", "española"));
  dishes.push(new Comidas(3,"Red Tuna Tataki", "13", "asiatica"));
  dishes.push(new Comidas(4,"Red Tuna Tartar","14", "asiatica"));
  
  //No entiendo porque lineas 21 y 22 tira object Object, cuando mando por console.log lineas 33 y 53 :(
  
  const asiatica = (dishes.filter(elemento => elemento.variedad.includes("asiatica")));
  const espaniola = (dishes.filter(elemento => elemento.variedad.includes("española")));
  
  
  let preguntaInicial = prompt("Bienvenidos, seleccione el tipo de comida para conocer las opciones, por el momento estamos a prueba con: Asiatica o Española").toLowerCase();
  
  while (preguntaInicial == "" || (preguntaInicial != "asiatica" && preguntaInicial != "española")) {
    alert("Por favor ingrese una de las opciones.");
    preguntaInicial = prompt("Seleccione el tipo de comida para conocer las opciones: Asiatica o Española").toLowerCase();
  }
  if (preguntaInicial == "asiatica") {
    console.log(dishes[2],dishes[3]);
    console.log("Tambien disponemos de los siguentes platos españoles:" + (espaniola.toString()));
  
    let preguntaPago = prompt ("Desea pagar en efectivo?").toLowerCase();
  while (preguntaPago == "" || (preguntaPago != "si" && preguntaPago!= "no")) {
    alert("Responda Si o No");
    preguntaPago = prompt ("Desea pagar en efectivo?").toLowerCase();
  }
  
  if (preguntaPago == "si") {
    dishes[2].descuentoCash();
    dishes[3].descuentoCash();
    alert("Entonces los precios tienen descuento !!!");
    console.log(dishes[2],dishes[3]);
  }
  else if (preguntaPago == "no") {
    alert("Oh los precios son los detallados en el menu, pero tienes delivery SIN cargo !!!");
  }
  }
  else if (preguntaInicial == "española") {
    console.log(dishes[0],dishes[1]);
    console.log("Tambien disponemos de los siguentes platos asiaticos :" + asiatica);
    let preguntaPago = prompt ("Desea pagar en efectivo?").toLowerCase();
    while (preguntaPago == "" || (preguntaPago != "si" && preguntaPago!= "no")) {
      alert("Responda Si o No");
      preguntaPago = prompt ("Desea pagar en efectivo?").toLowerCase();
    }
    if (preguntaPago == "si") {
      dishes[0].descuentoCash();
      dishes[1].descuentoCash();
      alert("Entonces los precios tienen descuento !!!");
      console.log(dishes[0],dishes[1]);
    }
    else if (preguntaPago == "no") {
      alert("Oh los precios son los detallados en el menu, pero tienes delivery SIN cargo !!!");
    }
  }
  
  alert("Gracias por elegirnos, aqui los platos que se vienen !!!");


  function avisoDeJs() {
    alert("Ups !! En breve se habilitara el carrito de compras !!!");
}