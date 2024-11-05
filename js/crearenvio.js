
var precioenvio  = 10;
var  costoenvio = document.getElementById("total envio");


costoenvio.innerHTML = precioenvio + "$";
function entrega(){
 

        precioenvio = 5;
        costoenvio.innerHTML = precioenvio + "$";
        precioenvio = parseInt(precioenvio);
        calculartotala(precioenvio);




}
function entrega2(){
   
   
    
   
        precioenvio = 10;
        costoenvio.innerHTML = precioenvio + "$";
        precioenvio = parseInt(precioenvio);
        calculartotala(precioenvio);




}
precioenvio = parseInt(precioenvio);
calculartotala(precioenvio);


function calculartotala(precioen){

    var totalpro = document.getElementById("total productos");
    var totalsinetrega =  sessionStorage.getItem("total");
    totalsinetrega = parseFloat(totalsinetrega);
    totalpro.innerHTML = totalsinetrega + "$";
    var totalmasen =  precioen + totalsinetrega;
    sessionStorage.setItem("totalfinal",totalmasen );
    var total = document.getElementById("total");
    total.innerHTML = totalmasen;


}


function ralisarorden(){


   var notificaciones = document.getElementById("notificaciones");
   var mesajenoti = "no resivira notificaciones";
   var total  = sessionStorage.getItem("totalfinal");

   var gmail = document.getElementById("gmail").value;
   var direcion = document.getElementById("direccion").value;
   var nit = document.getElementById("nit").value;
   var nombre = document.getElementById("nombre").value;
   if(notificaciones.checked){

    mesajenoti = "okey resivira notificaciones";
   }
   
   
   var str1 = sessionStorage.getItem("nombre_producto");
   var str2 = sessionStorage.getItem("numero");
   var str3 = sessionStorage.getItem("precio");
  
  
   var arracontador = str2.split(',').map(num => parseFloat(num)).filter(num => num != null).filter(num => num <= 5);
   var arrapres = str3.split(',').map(pres => parseFloat(pres)).filter(num => !isNaN(num));
   var  arranombre = str1.split(',').filter(nom => nom != "");

                        alert("datos de compra "+"nombre y apellido"+nombre+"nit"+nit+" correo " + gmail+ " direccion " + direcion +" opcional " + mesajenoti+ " nombre de productos: "+ arranombre
                        + " preciodeproductos: " + arrapres +" cantidad de cada producto: "+ arracontador + " total a pagar: " + total);





}