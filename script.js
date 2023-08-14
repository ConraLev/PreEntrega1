let cantidad, precio, desc, descuento, compra, precioFinal;

precio = parseFloat(prompt("Ingrese Precio"));
cantidad = parseFloat(prompt("Ingrese cantidad de unidades"));
descuento = parseFloat(prompt("Ingrese descuento"));
resultado = document.getElementById("resultado");

compra = precio * cantidad;
desc = compra / 100 * descuento;
precioFinal = compra - desc;


resultado.innerHTML= "Total Sin Descuento: $" + compra
+ "<br>El descuento ingresado es de: " + descuento + "%"
+ "<br>El descuento es de: $" + desc
+ "<br>Debe abonar: $" + precioFinal;




/* PreEntrega N°1 - Levanti, Conrado */