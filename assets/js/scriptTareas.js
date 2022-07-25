/**
 *     <input type="text" id="tarea">
    <button id="agregarTarea">Agregar Tarea</button>
    <ul class="" id="tareas"></ul>
 */
let inputTarea = document.querySelector('#tarea')
let btnTarea = document.querySelector('#agregar')
let listaTarea = document.querySelector('#tareas')
let numeroTareas = document.querySelector('#cuenta-tareas')

const listaTareas = []


const agregaTarea = () => {
  let html = ""
  let nombreTarea = inputTarea.value
  listaTareas.push(nombreTarea)
  inputTarea.value = ""

  for (const tarea of listaTareas) {
    html+= /*html*/ `<li>${tarea}</li>`

    
  }
  listaTarea.innerHTML = html
  numeroTareas.innerHTML = listaTareas.length

}

btnTarea.addEventListener("click", agregaTarea)
