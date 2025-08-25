"use strict";

//seleções
const menu = document.querySelector(".bi");
const options = document.querySelector("#menu");
const textBannerH1 = document.querySelector(".text-banner h1");
const textBannerP = document.querySelector(".text-banner p");
const cards = document.querySelectorAll(".card");
const nomeForm = document.querySelector("#nome");
const emailForm = document.querySelector("#email");
const comentarioForm = document.querySelector("#comentário");
const btnSubmit = document.querySelector("#btn-submit");
const body = document.querySelector("body");
const containerForm = document.querySelector(".container-form");
const imgContato = document.querySelector(".img-contato");
const form = document.querySelector(".form");

//funções

    // Cria animação da seção de serviços
function animation() {

    const observer = new IntersectionObserver((entries, observer) => {

        entries.forEach((entry) => {
            if(entry.isIntersecting) {
                entry.target.classList.add("animation-card");
                observer.unobserve(entry.target);
            }
        })

    }, {}); 

    cards.forEach((card) => {
        observer.observe(card);
    });
}

    // Cria elemento de carregamento
const loading = () => {
    setTimeout(() => {
        containerForm.removeChild(loading);
    }, 5000)
    const loading = document.createElement("div");
    loading.classList.add("loading");
    containerForm.append(loading);
    
}

    // Cria elemento da mensagem de sucesso
const sucess = () => {
    containerForm.classList.add("show");

    const img = document.createElement("img");
    img.classList.add("img-sucess");
    img.src = "../Imagens/mark.png";
    img.alt = "Sucesso";

    const p = document.createElement("p");
    p.classList.add("info-sucess");
    p.textContent = "Enviado com sucesso."

    imgContato.style.display = "none";
    form.style.display = "none";

    loading();

    setTimeout(() => {
        containerForm.append(img);
        containerForm.append(p);
    }, 5000)

    setTimeout (() => {
        containerForm.classList.remove("show");
        containerForm.removeChild(img);
        containerForm.removeChild(p);
        imgContato.style.display = "flex";
        form.style.display = "flex";
        nomeForm.value = "";
        emailForm.value = "";
        comentarioForm.value = "";
    }, 10000)


}

    // Cria elemento do feedback
const feedback = () => {
    const div = document.createElement("div");
    div.classList.add("feedback");

    const p = document.createElement("p");
    div.append(p);

    return div;
}

    // Verificar campos do formulário
const check = () => {

    if(nomeForm.value === "" || emailForm.value === "" || comentarioForm.value === "") {
        const div = feedback();
        const p = div.firstChild;
        p.textContent = "Preencha todos os campos!";
        body.append(div);
        setTimeout(() => {
            body.removeChild(div);
        }, 3000);

        return;

    } else if(emailForm.value) {
        if(!emailForm.value.includes("@") || !emailForm.value.includes(".com")) {
            const div = feedback();
            const p = div.firstChild;
            p.textContent = "Email inválido!";
            body.append(div);
            setTimeout(() => {
                body.removeChild(div);
            }, 3000);

            return;
        } else if (emailForm.value.indexOf("@") === 0) {
            const div = feedback();
            const p = div.firstChild;
            p.textContent = "Email inválido!";
            body.append(div);
            setTimeout(() => {
                body.removeChild(div);
            }, 3000);

            return;
        }
    }

    sucess();
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

btnSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    check();
})
