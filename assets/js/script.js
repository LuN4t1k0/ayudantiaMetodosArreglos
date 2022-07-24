const listaDeInvitados = document.querySelector("#invitados") 
const invitadoInput = document.querySelector("#nuevoInvitado") 
const btnAgregar = document.querySelector("#agregarInvitado")

const invitados = []

const agregarInvitado = () => {
  //Agregar invitados al arreglo
  const nuevoInvitado = invitadoInput.value
  invitados.push(nuevoInvitado)
  invitadoInput.value = "" // vaciar el input

  //actualizar la informacion en el html
  let html = ""
  for (const invitado of invitados) {
    html+= /*html*/`<li>${invitado}</li>`  
  }

  listaDeInvitados.innerHTML = html



}

btnAgregar.addEventListener("click", agregarInvitado)