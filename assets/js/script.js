const listaDeInvitados = document.querySelector("#invitados") 
const invitadoInput = document.querySelector("#nuevoInvitado") 
const btnAgregar = document.querySelector("#agregarInvitado")

const invitados = []

const agregarInvitado = () => {
  //Agregar invitados al arreglo
  const nuevoInvitado = invitadoInput.value
  invitados.push({id:Date.now(), nombre : nuevoInvitado})
  invitadoInput.value = "" // vaciar el input

  //actualizar la informacion en el html
  let html = ""
  for (let invitado of invitados) {
    html+= /*html*/`<li>${invitado.nombre} <button onclick="borrar(${invitado.id})"> x </button></li>`  
  }

  listaDeInvitados.innerHTML = html
  console.log(invitados);
}

const borrar = (id) => {
  const index = invitados.findIndex((ele) => ele.id === id)
  invitados.splice(index, 1)

  let html = ""
  for (let invitado of invitados) {
    html+= /*html*/ `<li>${invitado.nombre} <button onclick="borrar(${invitado.id})"> x </button></li>`
    
  }
  listaDeInvitados.innerHTML = html
}

btnAgregar.addEventListener("click", agregarInvitado)