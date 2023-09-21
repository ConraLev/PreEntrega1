
/* Botones para borrar storage */

  btnBorrar.addEventListener('click', () => {
    carrito.pop();
    mostrarCarrito(); 
  });
  
  
  btnBorrarHist.addEventListener('click', () => {
    localStorage.clear()
    location.reload()
  });



/** Escucha el Form */

formIngresoProd?.addEventListener("submit", (e) => {
  e.preventDefault()
  let ok = false 
  let errors = "" ;

  /** Se toman las variables del formulario */

  let nombre = document.querySelector("#nombreProducto").value;
  let precio = parseFloat(document.querySelector("#precioForm").value);
  let cantidad = parseInt(document.querySelector("#cantidadForm").value);
  let descuento = parseInt(document.querySelector("#descuentoForm").value);
  
  /** Corrobora que se ingresen datos validos */

    if(nombreProducto.value.length < 2){
      errors += 'Ingrese Nombre Valido<br>';
      ok = true ;
    }

    if(nombreProducto.value.length > 20){
      errors += 'Nombre muy largo<br>';
      ok = true ;
    }
    
    if(precioForm.value.length < 1){
      errors += 'Ingresar Monto valido<br>';
      ok = true ;
    }

    if(cantidadForm.value.length < 1){
      errors += 'Ingresar cantidad valida<br>';
      ok = true ;
    }

    if(descuentoForm.value >= 100){
      errors += 'Descuento ingresado no valido<br>';
      ok = true ;
    }

    if(descuentoForm.value.length < 1){
      errors += 'Ingresar descuento valido<br>';
      ok = true ;
    }

    /** Muestras los errores  */

    if(ok){
      error.innerHTML = errors;
      document.getElementById("error").style.display ="block";
      document.getElementById("resultado").style.display ="none";
    }

    /** Si todo Ok, realiza funcion consulta y muestra resultado */

    if(!ok){
      consulta(nombre, cantidad, precio, descuento) ;
      document.getElementById("resultado").style.display ="block";
      document.getElementById("error").style.display ="none";
      mostrarCarrito();
  }

}
)

/** Funcion para cualcular descuento */

function consulta (nombre, precio, cantidad, descuento){
  
 
  let  desc, compra, subtotal;

  compra = precio * cantidad;
  desc = compra / 100 * descuento;
  subtotal = compra - desc; 

  /** Se genera un nuevo producto con la clase declarada en const.js y se pushea al carrito */

  let nuevoProducto = new Producto ( nombre , cantidad , subtotal);

  carrito.push (nuevoProducto);

  /** Guarda el producto cargado en el LocalStorage */

  localStorage.setItem("producto", JSON.stringify(carrito));
} 


/** Función para mostrar los productos en el carrito */

function mostrarCarrito() {

  let carritoHtml = '<ul>'; // Inicia una lista no ordenada

  // Itera sobre los productos en el carrito y construye elementos de lista para cada uno

  carrito.forEach((producto) => {

    carritoHtml += `<li>Nombre: ${producto.nombre}, Cantidad: ${producto.cantidad}, Subtotal: ${producto.subtotal}</li>`;

  });

  carritoHtml += '</ul>'; // Cierra la lista no ordenada

  resultado.innerHTML = carritoHtml; // Asigna la representación HTML al elemento resultado

}


/* PreEntrega N°3 - Levanti, Conrado */

