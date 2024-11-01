
var nombre = document.getElementById("nombre");

var descripcion = document.getElementById("descripcion");

var imagen = document.getElementById("imagen")


var nombre_producto = localStorage.getItem("nombreDelProducto");

var descripcion_producto = localStorage.getItem("descripcion");
var imagen_producto = localStorage.getItem("imagen")

imagen.src = imagen_producto;
descripcion.textContent = descripcion_producto;
nombre.textContent  = nombre_producto;

function creardatos(){


   
    const nuevaUrl = `/html/comprar.html/${nombre_producto}`;
    window.history.pushState({ nombre_producto: nombre_producto }, '', nuevaUrl);
    
 
}

creardatos();


//
window.onload = function() {
    const pathname = window.location.pathname;
    const partes = pathname.split('/'); 
    const nombreArticulo = partes[partes.length - 1]; 


};
//

function añadircarito(){
    
        var seguir = [];
        seguir.push(sessionStorage.getItem("nombre_producto"));
        seguir.push(nombre_producto);

        sessionStorage.setItem("nombre_producto" , seguir);

        var seguir = [];
        seguir.push(sessionStorage.getItem("numero"));
        seguir.push(1);

        sessionStorage.setItem("numero" , seguir);


}


function cargarDatos() {
    var numero = sessionStorage.getItem("numero");

    if (numero) {
        document.getElementById("numero").value = numero;
 
    }
}