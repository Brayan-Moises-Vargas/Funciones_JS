let divA = document.getElementById("primerD")
let divB = document.getElementById("segundoD")
let divC = document.querySelector("#tercerD")
let divD = document.querySelector("#cuartoD")
let divkey = document.getElementById("key")

let Colores = (Color) => {
    Color.target.style.backgroundColor = "black"
}

divA.addEventListener("click" , Colores )
divB.addEventListener("click" , Colores )
divC.addEventListener("click" , Colores )
divD.addEventListener("click" , Colores )

// agregando un div
function crea_un_div(color){
    
    let nuevodiv = document.createElement("div")
    
    nuevodiv.style.width= "200px"
    nuevodiv.style.height= "200px"
    nuevodiv.style.border = "4px solid"
    nuevodiv.style.margin = "20px"
    nuevodiv.style.textAlign= "center"

    nuevodiv.style.backgroundColor= color
    
document.body.appendChild(nuevodiv)
}
/*crear un div
let nuevoDiv = document.createElement("div")
nuevoDiv.appendChild(nuevoDiv)
nuevoDiv.style.color= color_del_div
*/

document.addEventListener("keydown" , function (evento) {
    if (evento.key === "a"){
        divkey.style.backgroundColor="pink"
    }
    else if(evento.key === "s"){
        divkey.style.backgroundColor="Orange"
    }
    else if (evento.key === "d"){
        divkey.style.backgroundColor="#40CFFF"
    }
    else if(evento.key === "q"){
     crea_un_div("#40CFFF")
    }
    else if(evento.key === "w"){
        crea_un_div("orange")
       }
       else if(evento.key === "e"){
        crea_un_div("#3F2212")
       }
})