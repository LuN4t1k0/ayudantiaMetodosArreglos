const tbody = document.querySelector("tbody");
const btn = document.querySelector("button");
const input = document.querySelector("input");


const productos = [
  { id: "AT12S", nombre: "Helado 5L", precio: 14990 },
  { id: "YEEM1", nombre: "Hielo 1kg", precio: 5990 },
  { id: "PSIQ4", nombre: "Agua 1.5L", precio: 14990 },
  { id: "MEPC7", nombre: "Soda 400Ml", precio: 890 },
];

const filtrarProductos = () => {
  const precio = input.value
  const productosFiltrados = productos.filter(p => p.precio >= precio)
  renderRows(productosFiltrados)
}

const renderRows = (productos) => {
  tbody.innerHTML = "";
  productos.forEach((producto) => {
    tbody.innerHTML +=/*html */ `
            <tr>
              <td>${producto.id}</td>
              <td>${producto.nombre}</td>
              <td>${producto.precio}</td>
</tr>`;
  });
}
renderRows(productos);

btn.addEventListener('click', filtrarProductos)
