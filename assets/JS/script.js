/** Se crea constructor de Objetos  */

class Productos {
  constructor (nombre, cantidad, subtotal){
      this.nombre = nombre 
      this.cantidad = cantidad
      this.subtotal = subtotal
  }
  }

/** Calcula el descuento y devuelve el nombre del producto y le precio  final con descuento aplicado  */

function consulta (){

  let  desc, compra, subtotal;

  let nombre = campoVacio("Ingrese Nombre de Producto")
  let precio = parseFloat(campoVacio("Ingrese Monto"));
  let cantidad = parseFloat(campoVacio("Ingrese Cantidad"));
  let descuento = parseFloat(campoVacio("Ingrese Descuento")); 

  compra = precio * cantidad;
  desc = compra / 100 * descuento;
  subtotal = compra - desc;

  alert ("Producto Ingresado: " + nombre
  + "\nTotal Sin Descuento: $" + compra 
  + "\nEl descuento ingresado es de: " + descuento 
  + "%\nEl descuento es de: $" + desc 
  + "\nDebe abonar: $" + subtotal);
    
  carrito.push(new Productos (nombre, cantidad, subtotal))

}

/** Funcion encargada de verificar que ingresen datos validos */

function campoVacio(pregunta) {
    let error;
    while (true) {
      error = (prompt(pregunta));
      
      if (error !== '')
        return error;
        
      alert("Ingrese un dato valido");
    }
  }
  
  /** Se declara el array que toma resultado de la function: consulta */

const carrito = [];


/** Se ingresa cantidad de productos  */

let cant =  parseFloat(campoVacio("Ingrese Cantidad de Productos"));

for (
  let i = 0 ; i < cant; i++){
    consulta()
   }

console.log(carrito) 



/* PreEntrega N°2 - Levanti, Conrado */

