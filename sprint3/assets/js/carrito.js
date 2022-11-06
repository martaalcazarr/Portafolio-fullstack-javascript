const baseDeDatos = [
  { id: 1, producto: "Altavoz", 
    precio: 300, 
    img: "assets/img/altavoz.jpg" },
  { id: 2, producto: "Celular", 
    precio: 300, 
    img: "assets/img/celular.jpeg" },
  {
    id: 3,
    producto: "Celular",
    precio: 100,
    img: "assets/img/celular.jpeg",
  },
  {
    id: 4,
    producto: "Computador",
    precio: 400,
    img: "assets/img/computador.jpeg",
  },
];
const cardContainer = document.getElementById("card-container");

function createItemFromTemplate(id, img, producto, precio) {
  return `<div id=${id} class="col mb-4">
                    <div class="card">
                      <img src=${img} class="card-img-top" alt="...">
                         <div class="card-body">
                           <h5 class="card-title">${producto}</h5>
                           <p class="card-text">Precio ${precio} CLP</p>
                           <a href="#" class="btn btn-primary">Agregar al carrito</a>
                        </div>
                     </div>
                  </div>`;
}

let carrito = [];
const divisa = 'CLP';
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');



cardContainer.innerHTML = productos;

function renderizarProductos() {
  baseDeDatos.forEach((info) => {
      // Estructura
      const miNodo = document.createElement('div');
      miNodo.classList.add('card', 'col-sm-4');
      // Body
      const miNodoCardBody = document.createElement('div');
      miNodoCardBody.classList.add('card-body');
      // Titulo
      const miNodoTitle = document.createElement('h5');
      miNodoTitle.classList.add('card-title');
      miNodoTitle.textContent = info.nombre;
      // Imagen
      const miNodoImagen = document.createElement('img');
      miNodoImagen.classList.add('img-fluid');
      miNodoImagen.setAttribute('src', info.imagen);
      // Precio
      const miNodoPrecio = document.createElement('p');
      miNodoPrecio.classList.add('card-text');
      miNodoPrecio.textContent = `${info.precio}${divisa}`;
      // Boton 
      const miNodoBoton = document.createElement('button');
      miNodoBoton.classList.add('btn', 'btn-primary');
      miNodoBoton.textContent = '+';
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

