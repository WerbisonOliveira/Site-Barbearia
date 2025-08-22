"use strict";
//seleções
const menu = document.querySelector(".bi");
const options = document.querySelector("#menu");

//funções
const checkMenu = () => {
    options.classList.toggle("hide");
}
//eventos
menu.addEventListener("click", () => {
    checkMenu();
});