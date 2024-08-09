const saludoBienvenida = document.querySelector("h1")

const datosUsuario = document.querySelector("p")
const botonMostrar = document.querySelector("#boton")

botonMostrar.onclick = function(){
    const primerNombre = document.querySelector("#ingresar-primer-nombre").value
    const segundoNombre = document.querySelector("#ingresar-segundo-nombre").value
    const apellidoUsuario = document.querySelector("#ingresar-apellido").value
    const edadUsuario = Number(document.querySelector("#ingresar-edad").value)
    

    saludoBienvenida.innerText = ("Bienvenido "+ primerNombre)
    datosUsuario.innerText = (" hola "+ primerNombre + " "+ segundoNombre + " " + apellidoUsuario + " tu edad es "+ edadUsuario)




    return false;



}

