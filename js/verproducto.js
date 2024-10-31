

const  nombre  = document.getElementById("nombre");




    function producto( nombredelproducto  , descripcion , imagen ){
       
        localStorage.setItem("nombreDelProducto", nombredelproducto);
        localStorage.setItem("descripcion", descripcion);
        localStorage.setItem("imagen", imagen);
        window.location.href = 'comprar.html';


   

    }
