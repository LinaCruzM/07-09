import { ValidatedString,ValidatedAdverage } from "./validated.js";
import { pintarCard,agregarEstudiante } from "./pintar.js";


const btnAgregar = document.querySelector('#btn');
const btnMostrar = document.querySelector('#btnMostrar');

//Agregar elementos por propiedad

//Agregar elementos .addEventListener
btnAgregar.addEventListener("click", () =>{
    const nombre = document.querySelector("#nombre").value;
    const apellido = document.querySelector("#apellido").value;
    const promedio = document.querySelector("#promedio").value;
    const opcion = document.querySelector("#opcion").value;

    if(ValidatedString(nombre) && ValidatedString(apellido) && opcion != "0"){
        if (!isNaN(parseFloat(promedio)) && (ValidatedAdverage(promedio))){
            agregarEstudiante(nombre,apellido,promedio);
            console.log("Validado");
        }else{
            console.log("Error promedio");
            modalAlerta("Error promedio");
        }
    }else{
        modalAlerta("Error datos");
        console.log("Error datos");
    }
    
});

btnMostrar.addEventListener("click",function(){
    pintarCard("ESTUDIANTE");
});

function modalAlerta(cadena){
    const alerta = document.createElement("div");
    const texto = document.createElement("p");
    texto.setAttribute("class", "textAlerta");
    alerta.setAttribute("id", "alerta");
    alerta.setAttribute("class", "alerta");
    texto.innerHTML = `<strong>${cadena}</strong>`;
    alerta.append(texto);
    document.body.appendChild(alerta);
    alerta.onclick = function(){
        document.getElementById("alerta").remove();
    }
}