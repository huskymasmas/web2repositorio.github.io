
var columna = document.getElementById("producto");

var str1 = sessionStorage.getItem("nombre_producto");
var str2 = sessionStorage.getItem("numero");
var str3 = sessionStorage.getItem("precio");


var arracontador = str2.split(',').map(num => parseFloat(num)).filter(num => num != null).filter(num => num <= 5);
var arrapres = str3.split(',').map(pres => parseFloat(pres)).filter(num => !isNaN(num));
var arranombre = str1.split(',').filter(nom => nom != "");


function ver(){

    for(var i  = 0 ; i < arrapres.length;i++){

        var rellenar = `<tr>
                            <td>${arranombre[i]}</td>
                            <td>${arrapres[i]}</td>
                            <td>${arracontador[i]}</td>
                        </tr>
                        `
                        columna.innerHTML += rellenar;
    }
    

}


var totale  = total(arrapres , arracontador);
if(totale > 100){

    var porsentaje =  totale * 0.2;
    console.log("descuento: " + "20%" );
    var oferta = totale - porsentaje;
    console.log("La total es: " + oferta );
}else{

    console.log("La total es: " + totale );

}


function total(ara1 , ara2){
    let total = 0;

    for(let i = 0; i < ara1.length; i++){


        total = total + ara1[i] * ara2[i];

    }
    return total;


}
function suma(n1 , n2 ){
        
    return n1 + n2 ;


}

ver();

