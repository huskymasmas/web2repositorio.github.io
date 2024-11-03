
    var columna = document.getElementById("producto");
    var str1 = sessionStorage.getItem("nombre_producto");
    var str2 = sessionStorage.getItem("numero");
    var str3 = sessionStorage.getItem("precio");
   
   
    var arracontador = this.str2.split(',').map(num => parseFloat(num)).filter(num => num != null).filter(num => num <= 5);
    var arrapres = this.str3.split(',').map(pres => parseFloat(pres)).filter(num => !isNaN(num));
    var arranombre = this.str1.split(',').filter(nom => nom != "");






 function ver(){

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
  ver();