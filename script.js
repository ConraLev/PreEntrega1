

let  desc, compra, precioFinal;

let nombre = campoVacio("Ingrese Nombre de Producto")
let precio = parseFloat(campoVacio("Ingrese Monto"));
let cantidad = parseFloat(campoVacio("Ingrese Cantidad"));
let descuento = parseFloat(campoVacio("Ingrese Descuento")); 
 resultado = document.getElementById("resultado");


compra = precio * cantidad;
desc = compra / 100 * descuento;
precioFinal = compra - desc;



alert ("Producto Ingresado: " + nombre
+ "\nTotal Sin Descuento: $" + compra 
+ "\nEl descuento ingresado es de: " + descuento 
+ "%\nEl descuento es de: $" + desc 
+ "\nDebe abonar: $" + precioFinal);



function campoVacio(pregunta) {
    let error;
    while (true) {
      error = (prompt(pregunta));
      
      if (error !== '')
        return error;
        
      alert("Ingrese un dato valido");
    }
  }
  

  let nombre2 = campoVacio("Ingrese Nombre de Producto")
  let precio2 = parseFloat(campoVacio("Ingrese Monto"));
  let cantidad2 = parseFloat(campoVacio("Ingrese Cantidad"));
  let descuento2 = parseFloat(campoVacio("Ingrese Descuento")); 
  
  
  compra2 = precio2 * cantidad2;
  desc2 = compra2 / 100 * descuento2;
  precioFinal2 = compra2 - desc2;
  
  
  
  alert ("Producto Ingresado: " + nombre2
  + "\nTotal Sin Descuento: $" + compra2
  + "\nEl descuento ingresado es de: " + descuento2 
  + "%\nEl descuento es de: $" + desc2 
  + "\nDebe abonar: $" + precioFinal2);



  let nombre3 = campoVacio("Ingrese Nombre de Producto")
  let precio3 = parseFloat(campoVacio("Ingrese Monto"));
  let cantidad3 = parseFloat(campoVacio("Ingrese Cantidad"));
  let descuento3 = parseFloat(campoVacio("Ingrese Descuento")); 

  
  
  compra3 = precio3 * cantidad3;
  desc3 = compra3 / 100 * descuento3;
  precioFinal3 = compra3 - desc3;
  
  
  
  alert ("Producto Ingresado: " + nombre3
  + "\nTotal Sin Descuento: $" + compra3 
  + "\nEl descuento ingresado es de: " + descuento3 
  + "%\nEl descuento es de: $" + desc3 
  + "\nDebe abonar: $" + precioFinal3);


  
const carrito = [];

  const produc = nombre;
  const produc_precio = precioFinal; 
  const final = ("Producto: " + produc + "\n" + "Precio: $" + produc_precio + "\n");

  const produc2 = nombre2;
  const produc_precio2 = precioFinal2; 
  const final2 = ("Producto: " + produc2 + "\n" + "Precio: $" + produc_precio2+ "\n");


  const produc3 = nombre3;
  const produc_precio3 = precioFinal3; 
  const final3 = ("Producto: " + produc3 + "\n" + "Precio: $" + produc_precio3+ "\n");

  let subtotal = precioFinal + precioFinal2 + precioFinal3;



  carrito.push(final + final2 + final3 + "Subtotal: $" + subtotal)


    
  
alert(carrito)



/* PreEntrega N°2 - Levanti, Conrado */
