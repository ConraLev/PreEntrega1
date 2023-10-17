/** Se declara el array que toma resultado de la function: consulta */

let carrito = [];
const carritoHistorial = localStorage.getItem('producto');
  if(carritoHistorial){
      carrito = JSON.parse(carritoHistorial);
      lista.style.display ="block";
      mostrarCarrito();
  }

/* Botones para borrar storage */

  btnBorrar.addEventListener('click', () => {
    carrito.pop();
    localStorage.setItem("producto", JSON.stringify(carrito));
    mostrarCarrito(); 

    if(carrito == ""){
      lista.style.display ="none";
    }

    
  });
  

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })

  btnBorrarHist.addEventListener('click', () => {
    

    swalWithBootstrapButtons.fire({
      title: 'Borrar historial?',
      text: "Una vez eliminado no podra recuperarlo",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, borrar historial!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
  
          'Borrado!',
          'Se ah eliminado el historial',
          'success'
        )

        localStorage.clear(); 

       setTimeout(function(){
        location.reload();
      }, 2000);

        

      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(

          'Cancelado',
          'Se mantiene el historial',
          'error'

          ); 
        }})
    })

      

/** Escucha el Form */


formIngresoProd.addEventListener("submit", (e) => {
  e.preventDefault()
  let ok = false 
  let errors = "" ;

  /** Se toman las variables del formulario */

  let nombre = document.querySelector("#nombreProducto").value;
  let precio = parseFloat(document.querySelector("#precioForm").value);
  let cantidad = parseInt(document.querySelector("#cantidadForm").value);
  let descuento = parseInt(document.querySelector("#descuentoForm").value);
  
  /** Corrobora que se ingresen datos validos */

    if(nombreProducto.value.length < 3 || nombreProducto.value.length > 20){
      errors += 'Ingrese Nombre Valido<br>';
      ok = true ;
    }

    if(precioForm.value.length < 1){
      errors += 'Ingresar Monto valido<br>';
      ok = true ;
    }

    if(cantidadForm.value < 1 || cantidadForm.value > 100 ){
      errors += 'Ingresar cantidad valida<br>';
      ok = true ;
    }

    if(descuentoForm.value >= 100 || descuentoForm.value.length < 1 ){
      errors += 'Descuento ingresado no valido<br>';
      ok = true ;
    }


    /** Muestras los errores  */

    if(ok){
      error.innerHTML = errors;
      document.getElementById("error").style.display ="block";
      document.getElementById("lista").style.display ="none";
    }

    /** Si todo Ok, realiza funcion consulta y muestra resultado */

    if(!ok){
      consulta(nombre, cantidad, precio, descuento) ;
      document.getElementById("lista").style.display ="block";
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

  Toastify({

    text: `¡Se agrego ${nombre} al carrito! `,
    position: "center",
    duration: 1500,
    
    }).showToast();
} 


/** Función para mostrar los productos en el carrito */

function mostrarCarrito() {

  let listaCarrito = '<ul>'; // Inicia una lista no ordenada

  // Itera sobre los productos en el carrito y construye elementos de lista para cada uno

  carrito.forEach((producto) => {

    listaCarrito += `<li>Nombre: ${producto.nombre} - Cantidad: ${producto.cantidad} - Subtotal: $` + (producto.subtotal).toFixed(2) +`</li>`;

  });

 

  carrito.forEach((producto) => {
   
    total += producto.subtotal;
   
    totalFinal.innerHTML= `TOTAL FINAL <br>` + (total).toFixed(2)
    totalFinal.style.display="block";

  });

  if(carrito == ""){
    totalFinal.style.display="none";
  }

  listaCarrito += '</ul>'; // Cierra la lista no ordenada

  lista.innerHTML = listaCarrito; // Asigna la representación HTML al elemento resultado

}



/* ProyectoFinal - Levanti, Conrado */
