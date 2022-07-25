const listaDeInvitados = document.querySelector("#invitados");
const invitadoInput = document.querySelector("#nuevoInvitado");
const btnAgregar = document.querySelector("#agregarInvitado");
const invitados = [];
/* Actualizamos la información en el HTML */

const renderInvitados = () => {
  let html = "";
  for (const invitado of invitados) {
    html += /*html*/ `<li>${invitado.nombre}<button onclick="eliminarInvitado(${invitado.id})"> x </button></li>`;
  }
  listaDeInvitados.innerHTML = html;
};

const agregarInvitados = () => {
  const nuevoInvitado = { id: Date.now(), nombre: invitadoInput.value };
  invitados.push(nuevoInvitado);
  invitadoInput.value = "";
  renderInvitados()
};

const eliminarInvitado = (id) => {
  const index =  invitados.findIndex(ele => ele.id === id)
  invitados.splice(index, 1)
  renderInvitados()
}


btnAgregar.addEventListener('click', agregarInvitados)