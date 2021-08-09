
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
        // Insertamos
        miNodoCardBody.appendChild(miNodoImagen);
        miNodoCardBody.appendChild(miNodoTitle);
        miNodoCardBody.appendChild(miNodoPrecio);
        miNodoCardBody.appendChild(miNodoBoton);
        miNodo.appendChild(miNodoCardBody);
        DOMitems.appendChild(miNodo);
    });
  }
  
  let a = 0
  function anyadirProductoAlCarrito(evento) {
    carrito.push(evento.target.getAttribute('id'))
    $("#items--cargados").html(carrito.length);
    // Actualizamos el carrito 
    guardarCarritoEnLocalStorage ();
  }
  
  
  
  
  function guardarCarritoEnLocalStorage () {
    miLocalStorage.setItem('carrito', JSON.stringify(carrito));
}

function cargarCarritoDeLocalStorage () {
    if (miLocalStorage.getItem('carrito') !== null) {
        carrito = JSON.parse(miLocalStorage.getItem('carrito'));
    }
}
  
  
 // DOMbotonVaciar.addEventListener('click', vaciarCarrito);
  
  cargarCarritoDeLocalStorage();
  renderizarProductos();
  };