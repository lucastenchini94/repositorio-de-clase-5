const botonSumar = document.querySelector("#tiempo-total")
let segundosTotales = Number(0)
const formulario = document.querySelector("#formulario")

botonSumar.onclick = function(){
    const textoResultado = document.querySelector("strong")
    
    const tiempoHoras = Number(document.querySelector("#tiempo-horas").value)
    const tiempoMinutos = Number(document.querySelector("#tiempo-minutos").value)
    const tiempoSegundos = Number(document.querySelector("#tiempo-segundos").value)

    segundosTotales = segundosTotales+(tiempoHoras*3600)+(tiempoMinutos*60)+tiempoSegundos

    const totalHoras = parseInt(segundosTotales/3600)
    const restantesSegundos = segundosTotales % 3600
    const totalMinutos = parseInt(restantesSegundos/60)
    const totalSegundosFinales = restantesSegundos % 60

    textoResultado.innerText = ("el tiempo total es de "+totalHoras+" horas "+totalMinutos+" minutos "+totalSegundosFinales+" segundos")

    
    formulario.reset();



    return false;
}