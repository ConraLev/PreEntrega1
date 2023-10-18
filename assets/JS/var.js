/* Se declaran las variables */

const formIngresoProd = document.querySelector("#form");
const resultado = document.querySelector("#lista");
const error = document.querySelector("#error");
const btnBorrar = document.querySelector("#btnBorrar");
const btnBorrarHist = document.querySelector("#btnBorrarHist");
const convertor = 273.15 ;
let icono = document.querySelector(".icono");
let temperature = document.querySelector(".temp");
let descriTemp = document.querySelector(".descr");
let loc = document.querySelector(".loc");
let subtotal = 0;



/** Se crea constructor de Objetos  */

class Producto {
  constructor (nombre, cantidad, subtotal){
      this.nombre = nombre;
      this.cantidad = cantidad ;
      this.subtotal = subtotal ; 
  }
}


