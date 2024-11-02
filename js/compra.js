
var nombre = document.getElementById("nombre");

var descripcion = document.getElementById("descripcion");

var imagen = document.getElementById("imagen");

var precio = document.getElementById("precio");

var nombre_producto = localStorage.getItem("nombreDelProducto");
var precio_producto = localStorage.getItem("precio");
var descripcion_producto = localStorage.getItem("descripcion");
var imagen_producto = localStorage.getItem("imagen");

function creardatos(){




    imagen.src = imagen_producto;
    descripcion.textContent = descripcion_producto;
    nombre.textContent  = nombre_producto;
    precio.textContent = precio_producto + "$";
    const nuevaUrl = `comprar.html/${nombre_producto}`;
    window.history.pushState({ nombre_producto: nombre_producto }, '', nuevaUrl);
    
    const params = new URLSearchParams(window.location.search);
    const producto = params.get("producto");

}

creardatos();


//
window.onload = function() {
    const pathname = window.location.pathname;
    const partes = pathname.split('/'); 
    const nombreArticulo = partes[partes.length - 1]; 


};
//
var oferta;
function añadircarito(){
    
    var selecioncantidad = document.getElementById("comboBox");

    var cantidadvalue = selecioncantidad.value;
    var cantidad = selecioncantidad.options[selecioncantidad.selectedIndex].text;

    cantidad = parseInt(cantidad);

        var seguir = [];
        seguir.push(sessionStorage.getItem("nombre_producto"));
        seguir.push(nombre_producto);

        sessionStorage.setItem("nombre_producto" , seguir);

        var seguir1 = [];
        seguir1.push(sessionStorage.getItem("numero"));
        seguir1.push(cantidad);

        sessionStorage.setItem("numero" , seguir1);

        var seguir2 = [];
        seguir2.push(sessionStorage.getItem("precio"));
        seguir2.push(precio_producto);

        sessionStorage.setItem("precio" , seguir2);
        alert("nuevo producto añadido");

}

function iniciaresena(){


    window.location.href = 'https://huskymasmas.github.io/web2repositorio.github.io/carrito.html';
}