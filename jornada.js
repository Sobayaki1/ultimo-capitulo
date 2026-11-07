/* ==========================================
   JORNADA — OS QUATRO ARQUIVOS E DESAFIOS
   (vem antes da tela da chave)
========================================== */

const ETAPAS = [

    {
        local: "ZOO SÃO PAULO",
        arquivo: "ARQUIVO 01",
        titulo: "A ORIGEM",
        texto: [
            "Toda história precisa começar em algum lugar.",
            "Algumas começam com uma escolha.",
            "Outras começam com um encontro.",
            "E algumas começam quando duas pessoas, sem perceber, começam a fazer parte da mesma história.",
            "Hoje existem quatro lugares que guardam quatro respostas.",
            "A primeira está onde a vida se manifesta de muitas formas.",
            "*Entre. Observe. E procure a primeira resposta."
        ],
        avisoArquivo: "Não abra o desafio até concluir o passeio pelo Zoo.",
        desafio: [
            "Existem muitas formas de vida neste lugar.",
            "Algumas caminham.<br>Algumas voam.<br>Algumas nadam.",
            "Algumas vivem sozinhas.",
            "Outras sobrevivem porque aprenderam a viver juntas.",
            "Mas existe uma forma de vida que não precisa de patas, asas ou raízes.",
            "Ela pode nascer em silêncio.",
            "Pode crescer sem que ninguém perceba.",
            "E, quando é verdadeira, pode fazer duas pessoas escolherem ficar.",
            "*O que é?"
        ],
        respostas: ["AMOR"],
        quase: ["PAIXAO", "CARINHO", "AFETO", "SENTIMENTO", "SENTIMENTOS", "AMIZADE",
                "RELACIONAMENTO", "UNIAO", "CONEXAO", "AMORES", "CORACAO", "FE", "ESPERANCA"],
        dica: "É algo que pode nascer em silêncio e crescer quando é cuidado.",
        letra: "A",
        instrucao: "Agora faça apenas uma coisa:<br>pegue a primeira letra da resposta.",
        parte: "Essa letra será a primeira parte do código."
    },

    {
        local: "SIMBA SAFARI",
        arquivo: "ARQUIVO 02",
        titulo: "A CONEXÃO",
        texto: [
            "A primeira resposta foi encontrada.",
            "Mas uma vida pode existir sozinha.",
            "Uma história, não.",
            "Para existir uma história entre duas pessoas, alguma coisa precisa aproximá-las.",
            "O segundo segredo está entre aqueles que caminham juntos.",
            "Observe.",
            "*Talvez a resposta esteja mais perto do que parece."
        ],
        avisoArquivo: "Não abra o desafio até concluir o Safari.",
        desafio: [
            "Algumas coisas duram segundos.",
            "Um olhar.<br>Um toque.<br>Um sorriso.<br>Um momento.",
            "Mas algumas delas ficam na memória muito depois de terem acabado.",
            "Existe um gesto simples que pode dizer coisas que palavras não conseguem.",
            "*O que é?"
        ],
        respostas: ["BEIJO", "BEIJOS"],
        quase: ["ABRACO", "ABRACOS", "CARINHO", "TOQUE", "OLHAR", "SORRISO", "SELINHO",
                "CAFUNE", "AFAGO", "CARICIA", "OLHARES", "SORRISOS", "MAOS", "ABRACAR", "BEIJAR"],
        dica: "É um gesto breve que pode ficar na memória por muito tempo.",
        letra: "B",
        instrucao: "Agora pegue somente a primeira letra.",
        parte: "Ela será a segunda parte do código."
    },

    {
        local: "JARDIM BOTÂNICO",
        arquivo: "ARQUIVO 03",
        titulo: "O CRESCIMENTO",
        texto: [
            "Nada que vive permanece igual.",
            "Uma árvore cresce.<br>Uma flor desabrocha.<br>Uma pessoa muda.",
            "E algumas relações começam pequenas...",
            "até se tornarem algo que ninguém imaginava no começo.",
            "Talvez seja por isso que o terceiro segredo esteja aqui.",
            "Entre raízes, folhas e caminhos,",
            "*procure aquilo que cresce quando é cuidado."
        ],
        avisoArquivo: "Não abra o desafio até concluir o passeio pelo Jardim.",
        desafio: [
            "Existe algo que pode começar com um olhar.",
            "Pode crescer com conversas.",
            "Pode ficar mais forte com o tempo.",
            "Pode sobreviver aos dias difíceis.",
            "E, quando é verdadeiro, faz o coração bater diferente quando determinada pessoa aparece.",
            "Não é uma planta.<br>Não é uma árvore.",
            "Mas também precisa ser cuidado para continuar crescendo.",
            "*O que é?"
        ],
        respostas: ["CORACAO", "CORACOES"],
        quase: ["AMOR", "PAIXAO", "SENTIMENTO", "SENTIMENTOS", "RELACIONAMENTO", "CARINHO",
                "AFETO", "RELACAO", "AMIZADE", "CONFIANCA", "UNIAO", "NAMORO", "CUMPLICIDADE"],
        dica: "É algo que bate diferente quando uma pessoa especial aparece.",
        letra: "C",
        instrucao: "Agora procure a primeira letra.",
        parte: "Ela é a terceira parte do código."
    },

    {
        local: "MUNDO DINO",
        arquivo: "ARQUIVO 04",
        titulo: "O TEMPO",
        texto: [
            "Milhões de anos podem separar o presente do passado.",
            "Espécies desaparecem.<br>Mundos mudam.",
            "Mas algumas coisas conseguem atravessar o tempo.",
            "Memórias.<br>Histórias.<br>Sentimentos.",
            "Este é o último lugar.",
            "*E talvez a última resposta seja justamente aquela que você gostaria que durasse mais do que uma única noite."
        ],
        avisoArquivo: "Não abra o desafio até concluir o Mundo Dino.",
        desafio: [
            "Imagine que você pudesse voltar milhões de anos no tempo.",
            "Você não poderia levar seu celular.<br>Não poderia levar dinheiro.<br>Não poderia levar fotos.<br>Não poderia levar objetos.",
            "Mas poderia levar apenas uma coisa que considera importante.",
            "Algo que não ocupa espaço.",
            "Algo que pode sobreviver ao tempo.",
            "Algo que pode existir mesmo quando todo o resto desaparece.",
            "*O que você levaria?"
        ],
        respostas: ["AMOR"],
        quase: ["MEMORIA", "MEMORIAS", "LEMBRANCA", "LEMBRANCAS", "SENTIMENTO", "SENTIMENTOS",
                "SAUDADE", "SAUDADES", "VOCE", "HISTORIA", "HISTORIAS", "FELICIDADE", "ALEGRIA",
                "ESPERANCA", "FE", "CORACAO", "PAIXAO", "CARINHO", "AFETO", "AMIZADE",
                "CONHECIMENTO", "SABEDORIA", "CORAGEM", "ALMA", "FAMILIA", "MOMENTOS", "NOS", "GENTE"],
        dica: "É algo que não ocupa espaço, mas que gostaríamos de levar conosco para o futuro.",
        letra: "A",
        instrucao: "Agora faça a mesma coisa das outras vezes.<br>Pegue a primeira letra.",
        parte: "Essa é a última parte do código."
    }

];

const TEXTO_FINAL = [
    "Quatro lugares.<br>Quatro respostas.<br>Quatro letras.",
    "#LETRAS",
    "Cada letra tem o seu lugar no alfabeto.",
    "Descubra o lugar de cada uma.",
    "Some tudo.",
    "*O resultado é a chave."
];


/* ==========================================
   ELEMENTOS
========================================== */

const jTelas = {
    abertura: document.getElementById("tela-abertura"),
    arquivo: document.getElementById("tela-arquivo"),
    desafio: document.getElementById("tela-desafio"),
    letra: document.getElementById("tela-letra"),
    final: document.getElementById("tela-arquivo-final"),
    chave: document.getElementById("tela-inicial")
};

const respostaInput = document.getElementById("resposta-desafio");
const erroDesafio = document.getElementById("erro-desafio");
const dicaDesafio = document.getElementById("dica-desafio");


/* ==========================================
   PROGRESSO SALVO NO CELULAR
   (se a página recarregar, volta para onde parou)
========================================== */

const CHAVE_STORAGE = "ultimo-capitulo-progresso";

let estado = { etapa: 0, passo: "abertura" };

function salvar() {
    try { localStorage.setItem(CHAVE_STORAGE, JSON.stringify(estado)); } catch (e) {}
}

function carregar() {
    try {
        const s = JSON.parse(localStorage.getItem(CHAVE_STORAGE));
        if (s && typeof s.etapa === "number" && s.passo) estado = s;
    } catch (e) {}
}

function reiniciar() {
    try { localStorage.removeItem(CHAVE_STORAGE); } catch (e) {}
    estado = { etapa: 0, passo: "abertura" };
}


/* ==========================================
   UTILITÁRIOS
========================================== */

function normalizarResposta(texto) {
    return texto
        .normalize("NFD")
        .replace(/[̀-ͯ]/g, "")
        .toUpperCase()
        .replace(/[^A-Z ]/g, "")
        .trim()
        .replace(/\s+/g, " ")
        .replace(/^(O|A|UM|UMA|OS|AS|MEU|MINHA|NOSSO|NOSSA) /, "");
}

function telaAtiva() {
    return document.querySelector(".tela.ativa");
}

function irPara(proxima) {
    const atual = telaAtiva();
    if (atual && atual !== proxima) {
        trocarTela(atual, proxima);
    } else {
        proxima.classList.add("ativa");
    }
    proxima.scrollTop = 0;
}

function desenharProgresso(qtd) {
    document.querySelectorAll("[data-progresso]").forEach(el => {
        el.innerHTML = ETAPAS.map((e, i) =>
            i < qtd ? `<span class="achada">${e.letra}</span>` : "<span>_</span>"
        ).join("");
    });
}

// Mostra os parágrafos um a um, com fade. Tocar na tela mostra tudo de uma vez.
async function revelarParagrafos(container, linhas, tela, acoes) {
    container.innerHTML = "";
    acoes.classList.remove("visivel");

    const ps = linhas.map(l => {
        const p = document.createElement("p");
        if (l === "#LETRAS") {
            p.className = "letras-final";
            p.innerHTML = '<span class="letras"><span>A</span><span>—</span><span>B</span><span>—</span><span>C</span><span>—</span><span>A</span></span>';
        } else if (l.startsWith("*")) {
            p.className = "forte";
            p.innerHTML = l.slice(1);
        } else {
            p.innerHTML = l;
        }
        container.appendChild(p);
        return p;
    });

    let pular = false;
    const aoTocar = () => { pular = true; };
    tela.addEventListener("click", aoTocar);

    await esperar(1100);

    for (const p of ps) {
        p.classList.add("visivel");
        if (!pular) {
            requestAnimationFrame(() => tela.scrollTo({ top: tela.scrollHeight, behavior: "smooth" }));
            await esperar(1300);
        }
    }

    tela.removeEventListener("click", aoTocar);
    await esperar(pular ? 200 : 600);
    acoes.classList.add("visivel");
    requestAnimationFrame(() => tela.scrollTo({ top: tela.scrollHeight, behavior: "smooth" }));
}


/* ==========================================
   TELAS DA JORNADA
========================================== */

function mostrarAbertura() {
    estado.passo = "abertura";
    salvar();
    irPara(jTelas.abertura);
}

function mostrarArquivo() {
    const e = ETAPAS[estado.etapa];
    estado.passo = "arquivo";
    salvar();
    desenharProgresso(estado.etapa);

    document.getElementById("arquivo-rotulo").textContent = e.arquivo;
    document.getElementById("arquivo-titulo").textContent = e.titulo;
    document.getElementById("arquivo-aviso").textContent = e.avisoArquivo;
    document.getElementById("btn-abrir-desafio").textContent =
        "ABRIR DESAFIO " + String(estado.etapa + 1).padStart(2, "0");

    irPara(jTelas.arquivo);
    revelarParagrafos(
        document.getElementById("arquivo-texto"), e.texto,
        jTelas.arquivo, document.getElementById("arquivo-acoes")
    );
}

let tentativas = 0;

function mostrarDesafio() {
    const e = ETAPAS[estado.etapa];
    estado.passo = "desafio";
    salvar();
    desenharProgresso(estado.etapa);
    tentativas = 0;

    document.getElementById("desafio-local").textContent = e.local;
    document.getElementById("desafio-titulo").textContent =
        "DESAFIO " + String(estado.etapa + 1).padStart(2, "0");
    respostaInput.value = "";
    erroDesafio.textContent = "";
    dicaDesafio.textContent = "";
    dicaDesafio.classList.remove("visivel");

    irPara(jTelas.desafio);
    revelarParagrafos(
        document.getElementById("desafio-texto"), e.desafio,
        jTelas.desafio, document.getElementById("desafio-acoes")
    );
}

function verificarResposta() {
    const e = ETAPAS[estado.etapa];
    const r = normalizarResposta(respostaInput.value);
    if (!r) return;

    if (e.respostas.includes(r)) {
        respostaInput.blur();
        mostrarLetra();
        return;
    }

    tentativas++;

    if (e.quase.includes(r)) {
        erroDesafio.textContent = `Quase… pense em algo que começa com ${e.letra}.`;
    } else if (tentativas >= 4) {
        erroDesafio.textContent = `Ainda não… a resposta começa com ${e.letra}.`;
    } else {
        erroDesafio.textContent = "Ainda não. Pense mais um pouco.";
    }

    if (tentativas >= 2 && !dicaDesafio.textContent) {
        dicaDesafio.textContent = "Dica: " + e.dica;
        setTimeout(() => dicaDesafio.classList.add("visivel"), 400);
    }

    respostaInput.select();
}

async function mostrarLetra() {
    const e = ETAPAS[estado.etapa];
    estado.passo = "letra";
    salvar();

    const ultima = estado.etapa === ETAPAS.length - 1;

    document.getElementById("letra-resposta").textContent = e.respostas[0]
        .replace("CORACAO", "CORAÇÃO");
    document.getElementById("letra-instrucao").innerHTML = e.instrucao;
    document.getElementById("letra-parte").textContent = e.parte;
    document.getElementById("letra-grande").textContent = e.letra;
    document.getElementById("letra-aviso").textContent = ultima
        ? ""
        : "Abra o próximo arquivo só quando chegarem ao próximo lugar.";
    document.getElementById("btn-proximo").textContent = ultima
        ? "ABRIR ARQUIVO FINAL"
        : "ABRIR " + ETAPAS[estado.etapa + 1].arquivo;

    desenharProgresso(estado.etapa); // a letra nova entra com animação

    const itens = [
        document.getElementById("letra-instrucao"),
        document.getElementById("letra-parte"),
        document.querySelector("#tela-letra [data-progresso]"),
        document.getElementById("letra-aviso"),
        document.getElementById("btn-proximo")
    ];
    const grande = document.getElementById("letra-grande");
    itens.forEach(i => i.classList.add("oculto"));
    grande.classList.remove("visivel");

    irPara(jTelas.letra);

    await esperar(1500);
    itens[0].classList.remove("oculto");
    await esperar(1500);
    grande.classList.add("visivel");
    await esperar(1500);
    itens[1].classList.remove("oculto");
    await esperar(900);
    desenharProgresso(estado.etapa + 1);
    itens[2].classList.remove("oculto");
    await esperar(1200);
    itens[3].classList.remove("oculto");
    itens[4].classList.remove("oculto");
}

function proximaEtapa() {
    estado.etapa++;
    if (estado.etapa >= ETAPAS.length) {
        estado.etapa = ETAPAS.length;
        mostrarArquivoFinal();
    } else {
        mostrarArquivo();
    }
}

function mostrarArquivoFinal() {
    estado.passo = "final";
    salvar();
    irPara(jTelas.final);
    revelarParagrafos(
        document.getElementById("final-texto"), TEXTO_FINAL,
        jTelas.final, document.getElementById("final-acoes")
    );
}

function mostrarChave() {
    estado.passo = "chave";
    salvar();
    irPara(jTelas.chave);
}


/* ==========================================
   EVENTOS
========================================== */

document.getElementById("btn-comecar").addEventListener("click", () => {
    estado.etapa = 0;
    mostrarArquivo();
});

document.getElementById("btn-abrir-desafio").addEventListener("click", mostrarDesafio);
document.getElementById("btn-responder").addEventListener("click", verificarResposta);
respostaInput.addEventListener("keydown", ev => { if (ev.key === "Enter") verificarResposta(); });
document.getElementById("btn-proximo").addEventListener("click", proximaEtapa);
document.getElementById("btn-usar-chave").addEventListener("click", mostrarChave);

// Reinício escondido (para testar): tocar 5 vezes seguidas no ✦ da abertura,
// ou abrir o site com ?reiniciar no final do link.
let toquesOrnamento = 0, timerOrnamento;
document.getElementById("ornamento-abertura").addEventListener("click", () => {
    toquesOrnamento++;
    clearTimeout(timerOrnamento);
    timerOrnamento = setTimeout(() => { toquesOrnamento = 0; }, 1500);
    if (toquesOrnamento >= 5) {
        toquesOrnamento = 0;
        reiniciar();
        document.getElementById("ornamento-abertura").textContent = "✧";
        setTimeout(() => { document.getElementById("ornamento-abertura").textContent = "✦"; }, 800);
    }
});


/* ==========================================
   INÍCIO
========================================== */

(function iniciarJornada() {

    if (new URLSearchParams(location.search).has("reiniciar")) {
        reiniciar();
        history.replaceState(null, "", location.pathname);
    } else {
        carregar();
    }

    switch (estado.passo) {
        case "arquivo": mostrarArquivo(); break;
        case "desafio": mostrarDesafio(); break;
        case "letra":   mostrarLetra(); break;
        case "final":   mostrarArquivoFinal(); break;
        case "chave":   mostrarChave(); break;
        default:        mostrarAbertura();
    }

})();
