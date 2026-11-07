/* ==========================================
   EFEITOS — som de tecla, música e rolagem
========================================== */

/* ---------- SOM DE TECLA (gerado no navegador, sem arquivo) ---------- */

let audioCtx = null;
let ruidoTecla = null;

function prepararAudio() {
    try {
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            const dur = 0.03;
            ruidoTecla = audioCtx.createBuffer(1, Math.floor(audioCtx.sampleRate * dur), audioCtx.sampleRate);
            const d = ruidoTecla.getChannelData(0);
            for (let i = 0; i < d.length; i++) {
                d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / d.length, 4);
            }
        }
        if (audioCtx.state === "suspended") audioCtx.resume();
    } catch (e) {}
}

// Qualquer toque na tela libera o áudio (exigência dos celulares)
["pointerdown", "touchstart", "keydown"].forEach(ev =>
    document.addEventListener(ev, prepararAudio, { passive: true })
);

function somTecla() {
    if (!audioCtx || !ruidoTecla || audioCtx.state !== "running") return;
    try {
        const src = audioCtx.createBufferSource();
        src.buffer = ruidoTecla;
        src.playbackRate.value = 0.8 + Math.random() * 0.5;

        const filtro = audioCtx.createBiquadFilter();
        filtro.type = "bandpass";
        filtro.frequency.value = 1800 + Math.random() * 1200;
        filtro.Q.value = 0.9;

        const ganho = audioCtx.createGain();
        ganho.gain.value = 0.35;

        src.connect(filtro).connect(ganho).connect(audioCtx.destination);
        src.start();
    } catch (e) {}
}


/* ---------- ROLAGEM: só desce o necessário ---------- */

// Mantém o elemento visível sem passar do ponto:
// só rola quando o texto que está sendo escrito chega perto do fim da tela.
function manterVisivel(tela, elemento, suave) {
    requestAnimationFrame(() => {
        const limite = window.innerHeight * 0.72;
        const fundo = elemento.getBoundingClientRect().bottom;
        if (fundo > limite) {
            tela.scrollBy({ top: fundo - limite, behavior: suave ? "smooth" : "auto" });
        }
    });
}


/* ---------- DIGITAÇÃO LETRA A LETRA (aceita <br>) ---------- */

// controle.pular = true termina o texto na hora (toque na tela)
function digitar(elemento, html, tela, velocidade, controle) {
    return new Promise(resolve => {
        elemento.innerHTML = "";
        const linhas = html.split("<br>");
        let l = 0, i = 0;
        let no = document.createTextNode("");
        elemento.appendChild(no);

        function terminarTudo() {
            elemento.innerHTML = html;
            manterVisivel(tela, elemento);
            resolve();
        }

        function passo() {
            if (controle && controle.pular) return terminarTudo();

            if (i >= linhas[l].length) {
                l++;
                if (l >= linhas.length) return resolve();
                elemento.appendChild(document.createElement("br"));
                no = document.createTextNode("");
                elemento.appendChild(no);
                i = 0;
                return setTimeout(passo, velocidade * 4);
            }

            const c = linhas[l][i++];
            no.data += c;
            if (c.trim()) somTecla();
            manterVisivel(tela, elemento);
            setTimeout(passo, velocidade);
        }

        passo();
    });
}


/* ---------- MÚSICA DA CARTA FINAL ---------- */

function tocarMusica() {
    const m = document.getElementById("musica");
    if (!m || !m.paused) return;
    m.loop = true;
    m.volume = 0;
    const p = m.play();
    if (p && p.catch) p.catch(() => {});
    let v = 0;
    const fade = setInterval(() => {
        v = Math.min(0.7, v + 0.02);
        try { m.volume = v; } catch (e) {}
        if (v >= 0.7) clearInterval(fade);
    }, 120);
}
