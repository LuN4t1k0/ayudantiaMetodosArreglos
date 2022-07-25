/* Crear variables que sean iguales a los elementos del archivo html. */
const listaDeInvitados = document.querySelector("#invitados");
const invitadoInput = document.querySelector("#nuevoInvitado");
const btnAgregar = document.querySelector("#agregarInvitado");
const invitados = [];


/**
 * Recorre la matriz de invitados y, para cada invitado, agrega un elemento de lista al HTML, con el
 * nombre del invitado y un botón para eliminarlo.
 */
const renderInvitados = () => {
  let html = "";
  for (const invitado of invitados) {
    html += /*html*/ `<li>${invitado.nombre}<button onclick="eliminarInvitado(${invitado.id})"> x </button></li>`;
  }
  listaDeInvitados.innerHTML = html;
};

/**
 * Toma el valor de la entrada, crea un nuevo objeto con ese valor y lo agrega a la matriz
 */
const agregarInvitados = () => {
  const nuevoInvitado = { id: Date.now(), nombre: invitadoInput.value };
  invitados.push(nuevoInvitado);
  invitadoInput.value = "";
  renderInvitados()
};

/**
 * Encuentra el índice del elemento en la matriz que tiene la misma identificación que el pasado y
 * luego elimina ese elemento de la matriz.
 * @param id - El id del elemento que se va a eliminar.
 */
const eliminarInvitado = (id) => {
  const index =  invitados.findIndex(ele => ele.id === id)
  invitados.splice(index, 1)
  renderInvitados()
}


btnAgregar.addEventListener('click', agregarInvitados)