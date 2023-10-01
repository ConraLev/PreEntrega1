/* Se declaran las variables */

const formIngresoProd = document.querySelector("#form");
const resultado = document.querySelector("#lista");
const error = document.querySelector("#error");
const btnBorrar = document.querySelector("#btnBorrar");
const btnBorrarHist = document.querySelector("#btnBorrarHist");


/** Se crea constructor de Objetos  */

class Producto {
  constructor (nombre, cantidad, subtotal){
      this.nombre = nombre;
      this.cantidad = cantidad ;
      this.subtotal = subtotal ; 
  }
}

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
    mostrarCarrito(); 

    if(carrito == ""){
      lista.style.display ="none";
    }

  });
  
  
  btnBorrarHist.addEventListener('click', () => {
    localStorage.clear()
    location.reload()
  });

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
} 


/** Función para mostrar los productos en el carrito */

function mostrarCarrito() {

  let listaCarrito = '<ul>'; // Inicia una lista no ordenada

  // Itera sobre los productos en el carrito y construye elementos de lista para cada uno

  carrito.forEach((producto) => {

    listaCarrito += `<li>Nombre: ${producto.nombre}, Cantidad: ${producto.cantidad}, Subtotal: ${producto.subtotal}</li>`;

  });

  let total = 0

  carrito.forEach((producto) => {
   
    total += producto.subtotal;
   
    totalFinal.innerHTML= `TOTAL FINAL <br> $${total}`
    totalFinal.style.display="block";

  });

  if(carrito == ""){
    totalFinal.style.display="none";
  }

  listaCarrito += '</ul>'; // Cierra la lista no ordenada

  lista.innerHTML = listaCarrito; // Asigna la representación HTML al elemento resultado

}


/* ProyectoFinal - Levanti, Conrado */

