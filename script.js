let  desc, compra, precioFinal;

let precio = parseFloat(campoVacio("Ingrese Monto"));
let cantidad = parseFloat(campoVacio("Ingrese Cantidad"));
let descuento = parseFloat(campoVacio("Ingrese Descuento"));
resultado = document.getElementById("resultado");

compra = precio * cantidad;
desc = compra / 100 * descuento;
precioFinal = compra - desc;


alert ("Total Sin Descuento: $" + compra 
+ "\n El descuento ingresado es de: " + descuento 
+ "%\n El descuento es de: $" + desc 
+ "\n Debe abonar: $" + precioFinal);

function campoVacio(pregunta) {
    let error;
    while (true) {
      error = (prompt(pregunta));
      
      if (error !== '')
        return error;
        
      alert("Ingrese un numero valido");
    }
  }
  

/* PreEntrega N°1 - Levanti, Conrado */
