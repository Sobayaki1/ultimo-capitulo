/* ==========================================
   ELEMENTOS
========================================== */

const telaInicial = document.getElementById("tela-inicial");
const telaCifra = document.getElementById("tela-cifra");
const telaTransicao = document.getElementById("tela-transicao");
const telaCarta = document.getElementById("tela-carta");
const telaFinal = document.getElementById("tela-final");

const chave = document.getElementById("chave");
const mensagem = document.getElementById("mensagem");

const erroChave = document.getElementById("erro-chave");
const erroCifra = document.getElementById("erro-cifra");

const btnChave = document.getElementById("btn-chave");
const btnCifra = document.getElementById("btn-cifra");

const textoCarta = document.getElementById("texto-carta");
const btnContinuar = document.getElementById("btn-continuar");

const textoFinal = document.getElementById("texto-final");


/* ==========================================
   CONFIGURAÇÕES DA EXPERIÊNCIA
========================================== */

// Velocidade em que cada letra aparece
const velocidadeEscrita = 45;

// Tempo de espera depois que um parágrafo termina
const pausaEntreParagrafos = 1800;


/* ==========================================
   TROCA DE TELAS
========================================== */

function trocarTela(telaAtual, proximaTela) {

    telaAtual.classList.remove("ativa");

    setTimeout(() => {
        proximaTela.classList.add("ativa");
    }, 700);

}


/* ==========================================
   PRIMEIRA CHAVE
========================================== */

btnChave.addEventListener("click", verificarChave);

chave.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        verificarChave();
    }

});


function verificarChave() {

    const valor = chave.value.trim();

    if (valor === "7") {

        erroChave.textContent = "";

        trocarTela(telaInicial, telaCifra);

    } else {

        erroChave.textContent =
            "CHAVE INCORRETA. Talvez você ainda tenha esquecido alguma coisa pelo caminho.";

        chave.value = "";

        chave.focus();

    }

}


/* ==========================================
   SEGUNDA ETAPA — CIFRA
========================================== */

btnCifra.addEventListener("click", verificarMensagem);

mensagem.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        verificarMensagem();
    }

});


function normalizarTexto(texto) {

    return texto
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toUpperCase()
        .trim()
        .replace(/\s+/g, " ");

}


function verificarMensagem() {

    const resposta = normalizarTexto(mensagem.value);

    const correta =
        "O ULTIMO CAPITULO COMECA AGORA";

    if (resposta === correta) {

        erroCifra.textContent = "";

        iniciarTransicao();

    } else {

        erroCifra.textContent =
            "Ainda não. Algumas respostas precisam ser descobertas.";

        mensagem.select();

    }

}


/* ==========================================
   TRANSIÇÃO
========================================== */

function iniciarTransicao() {

    trocarTela(telaCifra, telaTransicao);

    setTimeout(() => {

        document
            .getElementById("texto-transicao")
            .classList.add("visivel");

    }, 1200);


    setTimeout(() => {

        document
            .getElementById("texto-transicao")
            .classList.remove("visivel");

    }, 3300);


    setTimeout(() => {

        iniciarCarta();

    }, 4500);

}


/* ==========================================
   CARTA
========================================== */

const partesCarta = [

    "Hoje nós passamos por lugares diferentes, vimos coisas incríveis e criamos mais algumas memórias juntos.",

    "Mas, no fim, percebi que todas essas pistas estavam levando para a mesma coisa.",

    "Você.",

    "Porque não importa o lugar, a aventura ou o caminho.",

    "O que torna tudo especial é ter alguém ao lado para compartilhar.",

    "E é justamente isso que eu quero.",

    "Quero continuar conhecendo lugares com você.",

    "Quero continuar rindo com você.",

    "Quero continuar criando memórias que, daqui a muitos anos, ainda vamos lembrar.",

    "E quero descobrir tudo aquilo que ainda está esperando por nós."

];


/* ==========================================
   EFEITO DE DIGITAÇÃO COM AUTO-SCROLL CORRIGIDO
========================================== */

// Rola o container da carta (#tela-carta) diretamente até o fim
function rolarParaOFim(suave = false) {
    if (suave) {
        telaCarta.scrollTo({
            top: telaCarta.scrollHeight,
            behavior: "smooth"
        });
    } else {
        telaCarta.scrollTop = telaCarta.scrollHeight;
    }
}

function escreverTexto(elemento, texto) {
    return new Promise((resolve) => {
        let indice = 0;
        elemento.textContent = "";

        const intervalo = setInterval(() => {
            elemento.textContent += texto[indice];
            indice++;

            // Rola instantaneamente a cada letra sem travar a animação
            rolarParaOFim(false);

            if (indice >= texto.length) {
                clearInterval(intervalo);
                resolve();
            }
        }, velocidadeEscrita);
    });
}


/* ==========================================
   MOSTRAR CARTA
========================================== */

async function iniciarCarta() {

    trocarTela(telaTransicao, telaCarta);

    textoCarta.innerHTML = "";

    btnContinuar.classList.remove("visivel");

    // Pausa inicial
    await esperar(1200);

    for (let i = 0; i < partesCarta.length; i++) {

        const paragrafo = document.createElement("p");

        textoCarta.appendChild(paragrafo);

        await esperar(200);

        paragrafo.classList.add("visivel");

        // Rola suavemente quando o parágrafo surge
        rolarParaOFim(true);

        // Escreve letra por letra
        await escreverTexto(
            paragrafo,
            partesCarta[i]
        );

        // Pausa antes do próximo parágrafo
        await esperar(pausaEntreParagrafos);

    }

    // Exibe o botão final e rola suavemente até ele
    await esperar(800);

    btnContinuar.classList.add("visivel");
    rolarParaOFim(true);

}


/* ==========================================
   FUNÇÃO DE ESPERA
========================================== */

function esperar(tempo) {

    return new Promise(resolve => {

        setTimeout(resolve, tempo);

    });

}


/* ==========================================
   FINAL
========================================== */

btnContinuar.addEventListener("click", iniciarFinal);


function iniciarFinal() {

    trocarTela(telaCarta, telaFinal);


    // ...

    setTimeout(() => {

        textoFinal.classList.add("visivel");

    }, 1800);


    // Some
    setTimeout(() => {

        textoFinal.classList.remove("visivel");

    }, 4200);


    // "Olhe para mim."
    setTimeout(() => {

        textoFinal.textContent = "Olhe para mim.";

        textoFinal.classList.add("visivel");

    }, 6000);


    // Some novamente
    setTimeout(() => {

        textoFinal.classList.remove("visivel");

    }, 8500);


    // Última mensagem
    setTimeout(() => {

        textoFinal.textContent =
            "Agora não existe mais nenhuma pista.";

        textoFinal.classList.add("visivel");

    }, 10000);

}
