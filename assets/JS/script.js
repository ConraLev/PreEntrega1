 
/* Se declaran las variables */

const formIngresoProd = document.querySelector("#form");
const nombre = document.querySelector("#nombreProducto").value;
const precio = document.querySelector("#precioForm").value;
const cantidad = document.querySelector("#cantidadForm").value;
const descuento = document.querySelector("#descuentoForm").value;


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
      resultado.innerHTML = carrito ;
  }
 

  /*Botones para borrar storage */

  btnBorrar.addEventListener('click', () => {
    carrito.pop();
    resultado.innerHTML = carrito ;
  });
  
  
  btnBorrarHist.addEventListener('click', () => {
    localStorage.clear()
    location.reload()
  });



/** Escucha el form y se encargada de verificar que ingresen datos validos */

formIngresoProd?.addEventListener("submit", (e) => {
  e.preventDefault()
  let ok = false 
  let errors = "" ;
  

    if(nombreProducto.value.length < 2){
      errors += 'Ingrese Nombre Valido<br>';
      ok = true ;
    }

    if(nombreProducto.value.length > 20){
      errors += 'Nombre muy largo<br>';
      ok = true ;
    }
    
    if(precioForm.value.length < 1){
      errors += 'Ingresar Monto valido<br>';
      ok = true ;
    }

    if(cantidadForm.value.length < 1){
      errors += 'Ingresar cantidad valida<br>';
      ok = true ;
    }

    if(descuentoForm.value.length >= 100){
      errors += 'Maxima cantidad de unidades alcanzada<br>';
      ok = true ;
    }

    if(descuentoForm.value.length < 1){
      errors += 'Ingresar descuento valido<br>';
      ok = true ;
    }

    if(ok){
      error.innerHTML = errors;
      document.getElementById("error").style.display ="block";
      document.getElementById("resultado").style.display ="none";
    }

    if(!ok){
      consulta() ;
      document.getElementById("resultado").style.display ="block";
      document.getElementById("error").style.display ="none";
      resultado.innerHTML = carrito ;

  }

}
)



/** Calcula el descuento y devuelve el nombre del producto y le precio  final con descuento aplicado  */


function consulta (nombre, precio, cantidad, descuento){
  
 
  let  desc, compra, subtotal;

  compra = precio * cantidad;
  desc = compra / 100 * descuento;
  subtotal = compra - desc; 

  let nuevoProducto = new Producto ( nombre , cantidad , subtotal);
  carrito.push (nuevoProducto);
  localStorage.setItem("producto", JSON.stringify(carrito));
} 

console.log(carrito) 



/* PreEntrega N°3 - Levanti, Conrado */

