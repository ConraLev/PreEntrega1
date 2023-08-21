let cant =  parseFloat(campoVacio("Ingrese Cantidad de Productos"));

let nombreProducto = "";
let precioFinal = ""; 

for (
  let i = 0 ; i < cant; i++){
    consulta()
  }

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
    
  return(
    nombreProducto = nombre,
    precioFinal = subtotal)

}

function campoVacio(pregunta) {
    let error;
    while (true) {
      error = (prompt(pregunta));
      
      if (error !== '')
        return error;
        
      alert("Ingrese un dato valido");
    }
  }
  

const carrito = [];

  for (let i = 0 ; i < cant; i++){
  
  const produc = nombreProducto;
  const produc_precio = precioFinal; 
  const final = ("\nProducto: " + produc + "\n" + "Precio: $" + produc_precio);

  /* let subtotalFinal = precioFinal  */
  

  carrito.push(final /* + "Subtotal: $" + subtotalFinal */)
  }

alert(carrito)


/* PreEntrega N°2 - Levanti, Conrado */
