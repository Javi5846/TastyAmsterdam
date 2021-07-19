
$('#div--cart--section').prepend(`<div class="container">
<div class="row">
    <aside class="col-sm-12">
      <h2>Cart</h2>
      <!-- Elementos del carrito -->
      <ul id="carrito" class="list-group"></ul>
      <hr>
      <!-- Precio total -->
      <p class="text-right">Total: <span id="total"></span>&euro;</p>
      <button id="boton-vaciar" class="btn btn-danger">Delete Items</button>
      <a href="/Pages/cartsection.html"><button id="boton-pay" class="btn btn-danger">Checkout</button></a>
    </aside>
    <!-- Elementos generados a partir del JSON -->
    <main id="items" class="col-sm-12 row"></main>
</div>
</div>`);
$('aside').css("margin-left","200px");

window.onload = function() {
  
    const listaDeProductos = [
      {
          id: 1,
          plato: 'Red Tuna Tartar',
          precio: 11,
          imagen: '../assets/img/20210429_134414.jpg'
      },
      {
          id: 2,
          plato: 'Red Tuna Tataki',
          precio: 12,
          imagen: '../assets/img/20201108_191734.jpg'
      },
      {
          id: 3,
          plato: 'Cheese Cake (slice)',
          precio: 5.5,
          imagen: '../assets/img/20201218_144955.jpg'
      },
      {
          id: 4,
          plato: 'Banana & DDL Loaf Cake (800 gr aprox)',
          precio: 8,
          imagen: '../assets/img/20210224_123118.jpg'
      },
      {
          id: 5,
          plato: 'Black Rice (Cuttlefish ink)',
          precio: 7.5,
          imagen: '../assets/img/20210429_134225.jpg'
      },
      {
          id: 6,
          plato: 'Sushi (12 rolls, can be mixed with nigiri.)',
          precio: 18,
          imagen: '../assets/img/sushi1.jpg'
      }
    
    ];
    
    let carrito = [];
    let total = 0;
    const DOMitems = document.querySelector('#items');
    const DOMcarrito = document.querySelector('#carrito');
    const DOMtotal = document.querySelector('#total');
    const DOMbotonVaciar = document.querySelector('#boton-vaciar');
    const miLocalStorage = window.localStorage;
    
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
          const enJSON    = JSON.stringify(listaDeProductos);
          miNodoBoton.classList.add('btn', 'btn-primary');
          miNodoBoton.textContent = 'Add to Cart';
          miNodoBoton.setAttribute('id', info.id);
          miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
      });
    }
    
    let a = 0
    function anyadirProductoAlCarrito(evento) {
      carrito.push(evento.target.getAttribute('id'))
      $("#items--cargados").html(carrito.length);
      // Calculo el total
      calcularTotal();
      // Actualizamos el carrito 
      renderizarCarrito();
      guardarCarritoEnLocalStorage ();
    }
    
    
    function renderizarCarrito() {
      DOMcarrito.textContent = '';
      // Quitamos los duplicados
      const carritoSinDuplicados = [...new Set(carrito)];
      // Generamos los Nodos a partir de carrito
      carritoSinDuplicados.forEach((item) => {
          const miItem = listaDeProductos.filter((itemBaseDatos) => {
              return itemBaseDatos.id === parseInt(item);
          });
          const numeroUnidadesItem = carrito.reduce((total, itemId) => {
              return itemId === item ? total += 1 : total;
          }, 0);
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
    
    function borrarItemCarrito(evento) {
      const id = evento.target.dataset.item;
      carrito = carrito.filter((carritoId) => {
          return carritoId !== id;
      });
      $("#items--cargados").html(carrito.length);
      renderizarCarrito();
      calcularTotal();
      guardarCarritoEnLocalStorage ();
    }
    
    
    function calcularTotal() {
      total = 0 ;
      carrito.forEach((item) => {
          const miItem = listaDeProductos.filter((itemBaseDatos) => {
              return itemBaseDatos.id === parseInt(item);
          });
          total = total + miItem[0].precio;
      });
      DOMtotal.textContent = total.toFixed(2);
    }
    
    
    function vaciarCarrito() {
      carrito = [];
      a = 0
      $("#items--cargados").html(a);
      renderizarCarrito();
      calcularTotal();
      localStorage.clear();
    }
    
    function guardarCarritoEnLocalStorage () {
      miLocalStorage.setItem('carrito', JSON.stringify(carrito));
  }
  
  function cargarCarritoDeLocalStorage () {
      if (miLocalStorage.getItem('carrito') !== null) {
          carrito = JSON.parse(miLocalStorage.getItem('carrito'));
      }
  }
    
    
    DOMbotonVaciar.addEventListener('click', vaciarCarrito);
    
    cargarCarritoDeLocalStorage();
    renderizarProductos();
    calcularTotal();
    renderizarCarrito();
    
    };