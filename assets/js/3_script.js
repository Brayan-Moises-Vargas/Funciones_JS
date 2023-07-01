function pintar(colorfondo, color ="green"){
    /*aqui saque una linea */
    colorfondo.style.backgroundColor = color
    }
   /*aqui saque dos lineas */

     /*  Modificacion  */
    
    let colorfondo = document.getElementById("ele1")
    colorfondo.addEventListener("click" , function(){
        pintar(colorfondo, "yellow")
    })
   /* Con esto dejo el color por defecto */
    pintar(colorfondo)