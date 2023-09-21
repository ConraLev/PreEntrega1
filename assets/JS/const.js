 
/* Se declaran las variables */

const formIngresoProd = document.querySelector("#form");

const resultado = document.querySelector("#resultado");

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
      resultado.style.display ="block";
      mostrarCarrito();
  }