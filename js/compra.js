

function creardatos(){

    var nombre = document.getElementById("nombre");

    var descripcion = document.getElementById("descripcion");
    
    var imagen = document.getElementById("imagen")
    
    
    var nombre_producto = localStorage.getItem("nombreDelProducto");
    
    var descripcion_producto = localStorage.getItem("descripcion");
    var imagen_producto = localStorage.getItem("imagen")
    
    imagen.src = imagen_producto;
    descripcion.textContent = descripcion_producto;
    nombre.textContent  = nombre_producto;

    //
    const nuevaUrl = `/html/comprar.html/${nombre_producto}`;
    window.history.pushState({ nombre_producto: nombre_producto }, '', nuevaUrl);
    
 
}

creardatos();


//
window.onload = function() {
    const pathname = window.location.pathname;
    const partes = pathname.split('/'); 
    const nombreArticulo = partes[partes.length - 1]; 


    cargarArticulo(nombreArticulo);
};
//


function añadircarito(){

    if(sessionStorage.getItem("numero").length == 0){

        datos.dats.numero.push(1);
        sessionStorage.setItem("numero" ,  datos.dats.numero);
    
    }
    var seguir = [];
    seguir.push(sessionStorage.getItem("numero"));
    seguir.push(1);
    sessionStorage.setItem("numero" ,  seguir)
}
function ver(){

    for( var i  = 0 ; i <  sessionStorage.getItem("numero").length; i++){

        alert(sessionStorage.getItem("numero"));


    }

}

