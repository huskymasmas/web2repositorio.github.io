var num = localStorage.getItem("espacio");

if(num == NaN || num ==null){
    console.log( window.location.hash);
    var numero = window.location.hash.replace('#comprar.html#' , "");

    numero = parseInt(numero);

    num = numero
}

var nombre = document.getElementById("nombre");
var descripcion = document.getElementById("descripcion");
var imagen = document.getElementById("imagen");
var precio = document.getElementById("precio");

    fetch('js/inventario.json')
    .then(function (rs) {
    return rs.json();
    })
    .then(function(data){
    const nuevaUrl = `comprar.html#${num}`;

    window.location.hash = nuevaUrl;

    var producto = data[num];
    var nombre_producto = producto.nombres;
    var descripcion_producto = producto.descripcion;
    var imagen_producto = producto.imgaen; 
    var precio_producto = producto.precio;

    nombre.innerText = nombre_producto;
    descripcion.innerText = descripcion_producto;
    imagen.src = imagen_producto; 
    precio.innerText = precio_producto + "$";
        
 
    

    
    })
    .catch(function(error) {
    console.error('error', error);
    });



//

//
var oferta;
function añadircarito(){
    
    var selecioncantidad = document.getElementById("comboBox");

    var cantidadvalue = selecioncantidad.value;
    var cantidad = selecioncantidad.options[selecioncantidad.selectedIndex].text;

    cantidad = parseInt(cantidad);

       
        var seguir1 = [];
        seguir1.push(sessionStorage.getItem("numero"));
        seguir1.push(cantidad);

        sessionStorage.setItem("numero" , seguir1);

       

   
        alert("nuevo producto añadido");


        fetch('js/inventario.json')
        .then(function (rs) {
        return rs.json();
        })
        .then(function(data){
    
        var producto = data[num];
        var nombre_producto = producto.nombres;
        var descripcion_producto = producto.descripcion;
        var imagen_producto = producto.imgaen; 
        var precio_producto = producto.precio;
    
        var seguir2 = [];
        seguir2.push(sessionStorage.getItem("precio"));
        seguir2.push(precio_producto);
        sessionStorage.setItem("precio" , seguir2);
        
        var seguir = [];
        seguir.push(sessionStorage.getItem("nombre_producto"));
        seguir.push(nombre_producto);

        sessionStorage.setItem("nombre_producto" , seguir);

        
        })
        .catch(function(error) {
        console.error('error', error);
        });

      
        
}

function iniciaresena(){


    window.location.href = 'https://huskymasmas.github.io/web2repositorio.github.io/carrito.html';
}