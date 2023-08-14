let  desc, compra, precioFinal;

let precio = parseFloat(campoVacio("Ingrese Monto"));
let cantidad = parseFloat(campoVacio("Ingrese Cantidad"));
let descuento = parseFloat(campoVacio("Ingrese Descuento"));
resultado = document.getElementById("resultado");

compra = precio * cantidad;
desc = compra / 100 * descuento;
precioFinal = compra - desc;

resultado.innerHTML= "Total Sin Descuento: $" + compra
+ "<br>El descuento ingresado es de: " + descuento + "%"
+ "<br>El descuento es de: $" + desc
+ "<br>Debe abonar: $" + precioFinal;

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