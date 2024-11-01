
function ver(){


    var columna = document.getElementById("producto");

    var str1 = sessionStorage.getItem("nombre_producto");
    var str2 = sessionStorage.getItem("numero");


    var arracontador = str2.split(',').map(num => parseFloat(num)).filter(num => num != null).filter(num => num <= 5);

    var arranombre = str1.split(',').filter(nom => nom != "");
    //const sum = arra.reduce(suma) - 1;
    
    for(var i  = 0 ; i < arranombre.length;i++){

        var rellenar = `<tr>
                            <td>${arranombre[i]}</td>
                            <td>${arracontador[i]}</td>
                        </tr>
                        `
                        columna.innerHTML += rellenar;
    }
    
    //console.log("La suma es " + sum);

    

    

}
function suma(n1 , n2){
        
    return n1 +n2;


}

ver();

