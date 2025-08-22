"use strict";
//seleções
const menu = document.querySelector(".bi");
const options = document.querySelector("#menu");
const textBannerH1 = document.querySelector(".text-banner h1");
const textBannerP = document.querySelector(".text-banner p");
const cards = document.querySelectorAll(".card");

//funções

function animation() {

    const observer = new IntersectionObserver((entries, observer) => {

        entries.forEach((entry) => {
            if(entry.isIntersecting) {
                entry.target.classList.add("animation-card");
            }

        })

    }, {}); 

    cards.forEach((card) => {
        observer.observe(card);
    });
}

//eventos
menu.addEventListener("click", () => {
    options.classList.toggle("hide");
});

window.addEventListener("load", () => {
    textBannerH1.classList.add("animation");
    textBannerP.classList.add("animation");
    animation();
});
