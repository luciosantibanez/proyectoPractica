let productos = [];

// Funcion para mostrar los productos filtrados
function mostrarProductos(productosFiltrados) {
  const $lista = document.getElementById("productos");
  $lista.innerHTML = ""; // 

  productosFiltrados.forEach((producto) => {
    const precioNum = parseInt(
      producto.precio.replace("$", "").replace(",", "")
    );

    // Agregar el producto si cumple con el filtro de precio
    $lista.innerHTML += `
      <div class="col-lg-3 col-md-4 col-6 product p-3">
        <img class="img-fluid" src="${producto.imagen}" alt="${producto.nombre}">
        <h4 class="tituloProducto">${producto.nombre}</h4>
        <h6 class="categoria">${producto.categoria}</h6>
        <h6 class="precioProducto">${producto.precio}</h6>
        <button type="button" class="btn btn-secondary">Añadir al carro</button>
      </div>`;
  });
}

// Funcion para cargar los productos desde el archivo JSON
function GetProductos() {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState !== 4) return;

    if (xhr.status >= 200 && xhr.status < 400) {
      try {
        const json = JSON.parse(xhr.responseText);
        productos = json.productos;

        // Llamar a la función para mostrar productos sin aplicar filtro al principio
        filtrarProductos();
      } catch (error) {
        console.error("Error al procesar el JSON", error);
      }
    } else {
      console.error(
        `Error al cargar los productos: ${xhr.status} - ${xhr.statusText}`
      );
    }
  });

  xhr.open("GET", "/json/datos.json");
  xhr.send();
}

// Funcion para aplicar el filtro de precio
function filtrarProductos() {
  const precioRango = document.getElementById("precio");
  const categoriaActual = window.location.pathname.split("/").pop();
  const precioValueDisplay = document.getElementById("precioValue");
  precioValueDisplay.textContent = precioRango.value;

  // Rango de precio
  let productosFiltrados = [];

  // Filtrado para distintas páginas
  if (categoriaActual === "lamparas.html") {
    productosFiltrados = productos.lamparas.filter((producto) => {
      const precioNum = parseInt(
        producto.precio.replace("$", "").replace(",", "")
      );
      return precioNum <= precioRango.value;
    });
  } else if (categoriaActual === "cables.html") {
    productosFiltrados = productos.cables.filter((producto) => {
      const precioNum = parseInt(
        producto.precio.replace("$", "").replace(",", "")
      );
      return precioNum <= precioRango.value;
    });
  } else if (categoriaActual === "modulos.html") {
    productosFiltrados = productos.modular.filter((producto) => {
      const precioNum = parseInt(
        producto.precio.replace("$", "").replace(",", "")
      );
      return precioNum <= precioRango.value;
    });
  }

  // Mostrar productos filtrados
  mostrarProductos(productosFiltrados);
}

GetProductos();

document.getElementById("precio").addEventListener("input", filtrarProductos);
