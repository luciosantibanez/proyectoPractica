function GetProductos() {
    const xhr = new XMLHttpRequest();
    const $lista = document.getElementById("listado");
  
    // Iniciar la petición
    xhr.addEventListener("readystatechange", (e) => {
      if (xhr.readyState !== 4) return;
  
      if (xhr.status >= 200 && xhr.status < 300) {
        // Parsea el JSON de respuesta
        let json = JSON.parse(xhr.responseText);

        // Obtener el nombre de la página actual (lamparas.html, cables.html)
      const categoriaActual = window.location.pathname.split("/").pop();

  
        // Función para mostrar los productos
        function mostrarProductos(categoria) {
          categoria.forEach((producto) => {
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
  
        // Mostrar los productos de cada categoría (cables, lámparas)
        if (categoriaActual === "lamparas.html") {
            mostrarProductos(json.productos.lamparas);
          } else if (categoriaActual === "cables.html") {
            mostrarProductos(json.productos.cables);
          } else if (categoriaActual === "modulos.html") {
            mostrarProductos(json.productos.modular);
          }
  
      } else {
        $lista.innerHTML = `
          <div class="alert alert-danger">
            <h2>Error al cargar los productos</h2>
            <p>${xhr.status} - ${xhr.statusText}</p>
          </div>`;
      }
    });
  
    xhr.open("GET", "/json/datos.json");
    xhr.send();
  }
  
  // Llamamos a la función para cargar los productos
  GetProductos();
  