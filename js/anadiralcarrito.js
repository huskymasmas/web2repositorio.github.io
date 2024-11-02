export class verproductos{
   constructor(){
    this.columna = document.getElementById("producto");
    this.str1 = sessionStorage.getItem("nombre_producto");
    this.str2 = sessionStorage.getItem("numero");
    this.str3 = sessionStorage.getItem("precio");
   
   
    this.arracontador = this.str2.split(',').map(num => parseFloat(num)).filter(num => num != null).filter(num => num <= 5);
    this.arrapres = this.str3.split(',').map(pres => parseFloat(pres)).filter(num => !isNaN(num));
    this.arranombre = this.str1.split(',').filter(nom => nom != "");



   } 


 ver(){

    for(var i  = 0 ; i < this.arrapres.length;i++){

        var rellenar = `<tr>
                            <td>${this.arranombre[i]}</td>
                            <td>${this.arrapres[i]}</td>
                            <td>${this.arracontador[i]}</td>
                        </tr>
                        `
                        this.columna.innerHTML += rellenar;
    }
    

}

calcular(){
    var totale  = this.total(this.arrapres , this.arracontador);
    if(totale > 100){
    
        var porsentaje =  totale * 0.2;
        console.log("descuento: " + "20%" );
        var oferta = totale - porsentaje;
        console.log("La total es: " + oferta );
        localStorage.setItem("total",oferta);
    }else{
    
        console.log("La total es: " + totale );
        localStorage.setItem("total",totale);
    }


}



 total(ara1 , ara2){
    let total = 0;

    for(let i = 0; i < ara1.length; i++){


        total = total + ara1[i] * ara2[i];

    }
    return total;


  }
 suma(n1 , n2 ){
        
    return n1 + n2 ;


  }
}

verproductos = new verproductos();
verproductos.ver();
verproductos.calcular();
