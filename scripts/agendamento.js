"use strict"
//seleções
const containerForm = document.querySelector(".container-form");
    // first-form
const inputNome = document.querySelector("#nome");
const inputTelefone = document.querySelector("#telefone");
const buttonFirstForm = document.querySelector("#first-form button");
const body = document.querySelector("body");
const firstForm = document.querySelector("#first-form");

    // second-form
const secondForm = document.querySelector("#second-form");
const backBtn = document.querySelector("#back-btn");
const nextBtn = document.querySelector("#next-btn");
const containerClock = document.querySelectorAll(".input-clock");
const containerBarber = document.querySelectorAll(".input-barber");
const inputData = document.querySelector("#data");
const inputClock = document.querySelectorAll(".horario");

    // third-form
const thirdForm = document.querySelector("#third-form");
const prev = document.querySelector("#prev");
const containerService = document.querySelectorAll(".input-service");
const containerPayment = document.querySelectorAll(".input-payment");
const inputService = document.querySelectorAll(".service");
const inputPayment = document.querySelectorAll(".payment");
const toSchedule = document.querySelector("#to-schedule");



//funções

    // Cria elemento do feedback
const feedback = () => {
    const div = document.createElement("div");
    div.classList.add("feedback");

    const p = document.createElement("p");
    div.append(p);

    return div;
}  

    // Verifica os campos do formulário
const check = () => {

    if(inputNome.value === "" || inputTelefone.value === "") {
        const div = feedback();
        const p = div.firstChild;
        p.textContent = "Preencha todos os campos!";
        body.append(div);
        setTimeout(() => {
            body.removeChild(div);
        }, 3000);

        return;

    } else if (inputTelefone.value.length !== 11) {
        const div = feedback();
        const p = div.firstChild;
        p.textContent = "Telefone inválido!";
        body.append(div);
        setTimeout(() => {
            body.removeChild(div);
        }, 3000);

        return;
    }

    if(inputTelefone.value.indexOf("9") !== 2) {
        const div = feedback();
        const p = div.firstChild;
        p.textContent = "Telefone inválido!";
        body.append(div);
        setTimeout(() => {
            body.removeChild(div);
        }, 3000);

        return;
    }

    replaceForm();
}

    // Verifica os campos do formulário 2
const checkInputFormSecond = () => {
    let retorno = "";
    inputClock.forEach((input) => {
        if(input.checked) {
            return retorno = true;
        }

    })

    if(inputData.value === "" || retorno === "") {
        const div = feedback();
        const p = div.firstChild;
        p.textContent = "Existem campos vazios!";
        body.append(div);
        setTimeout(() => {
            body.removeChild(div);
        }, 3000);

        return;
    } 

    replaceFormTwo();

}

    // Verifica os campos do formulário 3
const checkInputFormThird = () => {
    let service = "";
    let payment = "";

    inputService.forEach((input) => {
        if(input.checked) {
            return service = true;
        };

    });

    inputPayment.forEach((input) => {
        if(input.checked) {
            return payment = true;
        };

    });

    if(service === "" || payment === "") {
        const div = feedback();
        const p = div.firstChild;
        p.textContent = "Existem campos vazios!";
        body.append(div);
        setTimeout(() => {
            body.removeChild(div);
        }, 3000);

        return;
    } 

    sucess();

}


    // função de restrição de caracteres do input nome
const checkInputNome = () => {
    const nome = inputNome.value.replace(/[^A-Z a-z]/g, "");
    inputNome.value= nome;
}

    // função de restrição de caracteres do input telefone
const checkInputTelefone = () => {
    const telefone = inputTelefone.value.replace(/[^0-9]/g, "");
    inputTelefone.value= telefone;
}

    // Troca de formulário 1 para o 2
const replaceForm = () => {
    if(!secondForm.classList.contains("show")) {
        firstForm.classList.toggle("hide");
        secondForm.classList.toggle("show");
    } else if (firstForm.classList.contains("hide")) {
        firstForm.classList.toggle("hide");
        secondForm.classList.toggle("show");
    }
}

    // Troca de formulário 2 para o 3
const replaceFormTwo = () => {
    if(secondForm.classList.contains("show")) {
        secondForm.classList.toggle("show");
        secondForm.classList.toggle("hide");
        thirdForm.classList.toggle("show");
    } else {
        secondForm.classList.toggle("show");
        secondForm.classList.toggle("hide");
        thirdForm.classList.toggle("show");
    }
}

    //marcação dos inputs form2
const checkInput = (container, input, array) => {
        array.forEach((container) => {
            if(container.classList.contains("checked")) {
                container.classList.remove("checked");
            };
        })

        if(!container.classList.contains("checked")) {
            container.classList.add("checked");
            input.click();
        }    
} 

    // Cria elemento de carregamento
const loading = () => {
    const loading = document.createElement("div");
    loading.classList.add("loading");
    containerForm.append(loading);
    setTimeout(() => {
        containerForm.removeChild(loading);
    }, 5000)
    
}

    // Cria elemento da mensagem de sucesso
const sucess = () => {
    containerForm.classList.add("sucess");

    const img = document.createElement("img");
    img.classList.add("img-sucess");
    img.src = "../Imagens/check.png";
    img.alt = "Sucesso";

    const p = document.createElement("p");
    p.classList.add("info-sucess");
    p.textContent = "Agendamento realizado com sucesso."

    const link = document.createElement("a");
    link.href = "agendamento.html"

    const button = document.createElement("button");
    button.type = "submit";
    button.textContent = "Realizar outro agendamento";
    link.append(button)

    thirdForm.style.display = "none";

    loading();

    setTimeout(() => {
        containerForm.append(img);
        containerForm.append(p);
        containerForm.append(link)
    }, 5000)


}


//eventos
    // form1
inputNome.addEventListener("input", () => {
    checkInputNome();
});

inputTelefone.addEventListener("input", () => {
    checkInputTelefone();
})

buttonFirstForm.addEventListener("click", (event) => {
    event.preventDefault();

    check();
});

    // form2
containerClock.forEach((container) => {
    container.addEventListener("click", () => {
        const input = container.children[0];

        checkInput(container, input, containerClock);
           
    });
});

containerBarber.forEach((container) => {
    container.addEventListener("click", () => {
        const input = container.children[0];
        checkInput(container, input, containerBarber);
    });
});

backBtn.addEventListener("click", (event) => {
    event.preventDefault();

    replaceForm();
});

nextBtn.addEventListener("click", (event) => {
    event.preventDefault();
    checkInputFormSecond();
});

    // form3
prev.addEventListener("click", (event) => {
    event.preventDefault();
    replaceFormTwo();
});

containerService.forEach((container) => {
    container.addEventListener("click", () => {
        const input = container.children[0];
        checkInput(container, input, containerService);
    });
});

containerPayment.forEach((container) => {
    container.addEventListener("click", () => {
        const input = container.children[0];
        checkInput(container, input, containerPayment);
    });
});

toSchedule.addEventListener("click", (event) => {
    event.preventDefault();

    checkInputFormThird();
});
