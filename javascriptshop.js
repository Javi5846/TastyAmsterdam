// Variables
const listaDeProductos = [
  {
      id: 1,
      plato: 'Red Tuna Tartar',
      precio: 11,
      imagen: 'assets/img/20210429_134414.jpg'
  },
  {
      id: 2,
      plato: 'Red Tuna Tataki',
      precio: 12,
      imagen: 'assets/img/20201108_191734.jpg'
  },
  {
      id: 3,
      plato: 'Cheese Cake (slice)',
      precio: 5.5,
      imagen: 'assets/img/20201218_144955.jpg'
  },
  {
      id: 4,
      plato: 'Banana & DDL Loaf Cake (800 gr aprox)',
      precio: 8,
      imagen: 'assets/img/20210224_123118.jpg'
  },
  {
      id: 5,
      plato: 'Black Rice (Cuttlefish ink)',
      precio: 7.5,
      imagen: 'assets/img/20210429_134225.jpg'
  },
  {
      id: 6,
      plato: 'Sushi (12 rolls, can be mixed with nigiri.)',
      precio: 18,
      imagen: 'assets/img/sushi1.jpg'
  }

];

let carrito = [];
let total = 0;
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');

// Funciones

/**
* Dibuja todos los productos a partir de la base de datos. No confundir con el carrito
*/
function renderizarProductos() {
  listaDeProductos.forEach((info) => {
      // Estructura
      const miNodo = document.createElement('div');
      miNodo.classList.add('card', 'col-sm-4');
      // Body
      const miNodoCardBody = document.createElement('div');
      miNodoCardBody.classList.add('card-body');
      // Titulo
      const miNodoTitle = document.createElement('h5');
      miNodoTitle.classList.add('card-title');
      miNodoTitle.textContent = info.plato;
      // Imagen
      const miNodoImagen = document.createElement('img');
      miNodoImagen.classList.add('img-fluid');
      miNodoImagen.setAttribute('src', info.imagen);
      // Precio
      const miNodoPrecio = document.createElement('p');
      miNodoPrecio.classList.add('card-text');
      miNodoPrecio.textContent = info.precio + '€';
      // Boton 
      const miNodoBoton = document.createElement('button');
      miNodoBoton.classList.add('btn', 'btn-primary');
      miNodoBoton.textContent = 'Add to Cart';
      miNodoBoton.setAttribute('marcador', info.id);
      miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
      // Insertamos
      miNodoCardBody.appendChild(miNodoImagen);
      miNodoCardBody.appendChild(miNodoTitle);
      miNodoCardBody.appendChild(miNodoPrecio);
      miNodoCardBody.appendChild(miNodoBoton);
      miNodo.appendChild(miNodoCardBody);
      DOMitems.appendChild(miNodo);
  });
}

/**
* Evento para añadir un producto al carrito de la compra
*/
function anyadirProductoAlCarrito(evento) {
  // Anyadimos el Nodo a nuestro carrito
  carrito.push(evento.target.getAttribute('marcador'))
  // Calculo el total
  calcularTotal();
  // Actualizamos el carrito 
  renderizarCarrito();

}

/**
* Dibuja todos los productos guardados en el carrito
*/
function renderizarCarrito() {
  // Vaciamos todo el html
  DOMcarrito.textContent = '';
  // Quitamos los duplicados
  const carritoSinDuplicados = [...new Set(carrito)];
  // Generamos los Nodos a partir de carrito
  carritoSinDuplicados.forEach((item) => {
      // Obtenemos el item que necesitamos de la variable base de datos
      const miItem = listaDeProductos.filter((itemBaseDatos) => {
          // ¿Coincide las id? Solo puede existir un caso
          return itemBaseDatos.id === parseInt(item);
      });
      // Cuenta el número de veces que se repite el producto
      const numeroUnidadesItem = carrito.reduce((total, itemId) => {
          // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
          return itemId === item ? total += 1 : total;
      }, 0);
      // Creamos el nodo del item del carrito
      const miNodo = document.createElement('li');
      miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
      miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].plato} - ${miItem[0].precio}€`;
      // Boton de borrar
      const miBoton = document.createElement('button');
      miBoton.classList.add('btn', 'btn-danger', 'mx-5');
      miBoton.textContent = 'X';
      miBoton.style.marginLeft = '1rem';
      miBoton.dataset.item = item;
      miBoton.addEventListener('click', borrarItemCarrito);
      // Mezclamos nodos
      miNodo.appendChild(miBoton);
      DOMcarrito.appendChild(miNodo);
  });
}

/**
* Evento para borrar un elemento del carrito
*/
function borrarItemCarrito(evento) {
  // Obtenemos el producto ID que hay en el boton pulsado
  const id = evento.target.dataset.item;
  // Borramos todos los productos
  carrito = carrito.filter((carritoId) => {
      return carritoId !== id;
  });
  // volvemos a renderizar
  renderizarCarrito();
  // Calculamos de nuevo el precio
  calcularTotal();
}

/**
* Calcula el precio total teniendo en cuenta los productos repetidos
*/
function calcularTotal() {
  // Limpiamos precio anterior
  total = 0;
  // Recorremos el array del carrito
  carrito.forEach((item) => {
      // De cada elemento obtenemos su precio
      const miItem = listaDeProductos.filter((itemBaseDatos) => {
          return itemBaseDatos.id === parseInt(item);
      });
      total = total + miItem[0].precio;
  });
  // Renderizamos el precio en el HTML
  DOMtotal.textContent = total.toFixed(2);
}

/**
* Varia el carrito y vuelve a dibujarlo
*/
function vaciarCarrito() {
  // Limpiamos los productos guardados
  carrito = [];
  // Renderizamos los cambios
  renderizarCarrito();
  calcularTotal();
}

// Eventos
DOMbotonVaciar.addEventListener('click', vaciarCarrito);

// Inicio
renderizarProductos();