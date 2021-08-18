let modal_fondo = document.getElementById("modal-fondo");
let modal = document.getElementById("modal");
let btn = document.getElementById("submit");
let input_eliminar = document.getElementById("codigo-eliminar");


btn.addEventListener("click",()=>{
    modal.classList.add("animacion-modal");
    modal_fondo.classList.remove("modal-ocultar");
    setTimeout(()=>{
        modal_fondo.classList.add("modal-ocultar");
        modal.classList.remove("animacion-modal")
    },2500);

});