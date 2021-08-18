let modal_fondo = document.getElementById("modal-fondo");
let modal = document.getElementById("modal");
let btn = document.getElementById("submit");
let input_eliminar = document.getElementById("codigo-eliminar");
let btn_agregar = document.getElementById("agregar");
let tabla = document.getElementById("tablita");

const cliente = [{
    n_socio: 7,
    nombre: "christopher",
    apellido: "mavers",
    direccion: "Hsoa 213",
    telefono: 55-555-5555,
    ejercicio: "nadar",
    pago: "si",

},
{
    n_socio: 7,
    nombre: "christopher",
    apellido: "mavers",
    direccion: "Hsoa 213",
    telefono: 55-555-5555,
    ejercicio: "nadar",
    pago: "si",

},
{
    n_socio: 7,
    nombre: "christopher",
    apellido: "mavers",
    direccion: "Hsoa 213",
    telefono: 55-555-5555,
    ejercicio: "nadar",
    pago: "si",

},
{
    n_socio: 7,
    nombre: "christopher",
    apellido: "mavers",
    direccion: "Hsoa 213",
    telefono: 55-555-5555,
    ejercicio: "nadar",
    pago: "si",

},]


btn_agregar.addEventListener("click", ()=>{
    tabla.innerHTML += `                    <tr>
    <td>${cliente.n_socio}</td>
    <td>${cliente.nombre}</td>
    <td>${cliente.apellido}</td>
    <td>${cliente.direccion}</td>
    <td>${cliente.telefono}</td>
    <td>${cliente.ejercicio}</td>
    <td>${cliente.pago}</td>
</tr>`
})