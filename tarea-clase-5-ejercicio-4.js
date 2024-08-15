const botonNumAleatorios = document.querySelector("#numeros-aleatorios")
const numerosAleatorios = document.querySelectorAll("li")
const botonCalcular = document.querySelector("#calcular")
const promedio = document.querySelector("#calcular-promedio")
const mayorNumero = document.querySelector("#mayor-numero")
const menorNumero = document.querySelector("#menor-numero")
const numeroMasFrecuente = document.querySelector("#numero-repetido")
let sumadorPromedio = 0
let contMayorNum = 0
let contMenorNum = 100
let contNumeroMasFrecuente

//el boton para lanzar numeros aleatorios en las listas
botonNumAleatorios.onclick = function () {
    let i = 0

    while (i<numerosAleatorios.length) {
        numerosAleatorios[i].innerText = getRandomInt()
       
        i++
    }

    
    return false;
}



function getRandomInt() {
    return parseInt(Math.random()*10);
  }



  //el boton para hacer los calculos
botonCalcular.onclick = function(){

    i=0
    while (i<numerosAleatorios.length) {
    //sumador para calcular el promedio luego
    sumadorPromedio = sumadorPromedio + Number(numerosAleatorios[i].innerText)
     //para encontrar el mayor y el menor numero
    if (numerosAleatorios[i].innerText<contMenorNum) {
        contMenorNum = (numerosAleatorios[i].innerText)
    }
    if (numerosAleatorios[i].innerText>contMayorNum) {
        contMayorNum = (numerosAleatorios[i].innerText)
    }

        i++
    }
    //y aqui el algoritmo que se me ocurrio para encontrar el numero que se repetia mas veces
    i=0
    let contUno=0
    while (i<numerosAleatorios.length) {
        let p=0
        let contDos=0
        while (p<numerosAleatorios.length) {
            if (numerosAleatorios[p].innerText==numerosAleatorios[i].innerText) {
                contDos++
                
            }
            p++
        }
        if (contDos>contUno) {
            contUno=contDos
            contNumeroMasFrecuente=numerosAleatorios[i].innerText

        }
        i++
    }
    
    promedio.innerText = ("el promedio es de "+ parseInt(sumadorPromedio/numerosAleatorios.length))
    mayorNumero.innerText = ("el mayor numero es "+contMayorNum)
    menorNumero.innerText = ("el menor numero es "+contMenorNum)
    numeroMasFrecuente.innerText = ("el primer numero que se repite mas veces es "+contNumeroMasFrecuente)




    return false
}





