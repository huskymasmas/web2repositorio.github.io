

const  nombre  = document.getElementById("nombre");




    function producto( nombredelproducto  , descripcion , imagen , precio ){
       
        localStorage.setItem("nombreDelProducto", nombredelproducto);
        localStorage.setItem("descripcion", descripcion);
        localStorage.setItem("imagen", imagen);
        localStorage.setItem("precio", precio);
        window.location.href = 'comprar.html';


   

    }
