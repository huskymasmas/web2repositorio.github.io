function ver(){


    var columna1 = document.getElementById("producto");
    var str = sessionStorage.getItem("numero");


    var arra = str.split(',').map(num => parseInt(num)).filter(num => num != null).filter(num => num < 5);
    const sum = arra.reduce(suma) - 1;
    
    for(var i  = 1 ; i < arra.length;i++){
        columna1.textContent = arra[i];
     
    }
    
    //document.writeln("La suma es " + sum);

    
       
    

}