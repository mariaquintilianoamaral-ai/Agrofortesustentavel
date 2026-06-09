const efeitos =
document.getElementById("efeitos");

const flash =
document.getElementById("flash");

/* =========================
   LIMPAR EFEITOS
========================= */

function limparEfeitos(){

    efeitos.innerHTML = "";

    const calor =
    document.querySelector(".calor");

    if(calor){
        calor.remove();
    }

    document
    .getElementById("solContainer")
    .style.display = "none";
}

/* =========================
   SOL
========================= */

function criarSol(){

    document
    .getElementById("solContainer")
    .style.display = "block";

    for(let i=0;i<40;i++){

        const particula =
        document.createElement("div");

        particula.classList.add("particula");

        particula.style.left =
        Math.random()*100 + "vw";

        particula.style.animationDuration =
        (5 + Math.random()*6) + "s";

        efeitos.appendChild(particula);
    }
}

/* =========================
   CHUVA
========================= */

function criarChuva(){

    for(let i=0;i<180;i++){

        const gota =
        document.createElement("div");

        gota.classList.add("rain");

        gota.style.left =
        Math.random()*100 + "vw";

        gota.style.animationDuration =
        (0.5 + Math.random()) + "s";

        efeitos.appendChild(gota);
    }
}

/* =========================
   NUVENS
========================= */

function criarNuvens(){

    for(let i=0;i<4;i++){

        const nuvem =
        document.createElement("div");

        nuvem.classList.add("cloud");

        nuvem.style.top =
        (10 + i*15) + "%";

        nuvem.style.animationDuration =
        (35 + Math.random()*20) + "s";

        efeitos.appendChild(nuvem);
    }
}

/* =========================
   CALOR
========================= */

function criarSeca(){

    const calor =
    document.createElement("div");

    calor.classList.add("calor");

    document.body.appendChild(calor);
}

/* =========================
   FOGO
========================= */

function criarFogo(){

    for(let i=0;i<60;i++){

        const chama =
        document.createElement("div");

        chama.classList.add("fire");

        chama.style.left =
        Math.random()*100 + "vw";

        chama.style.animationDuration =
        (0.5 + Math.random()) + "s";

        efeitos.appendChild(chama);
    }
}

/* =========================
   FUMAÇA
========================= */

function criarFumaca(){

    for(let i=0;i<20;i++){

        const fumaca =
        document.createElement("div");

        fumaca.classList.add("smoke");

        fumaca.style.left =
        Math.random()*100 + "vw";

        fumaca.style.animationDuration =
        (8 + Math.random()*6) + "s";

        efeitos.appendChild(fumaca);
    }
}

/* =========================
   GALHOS VOANDO
========================= */

function criarGalhos(){

    setInterval(()=>{

        if(
            document.body.classList.contains(
                "tempestade"
            )
        ){

            const galho =
            document.createElement("div");

            galho.classList.add("branch");

            galho.style.top =
            Math.random()*80 + "vh";

            galho.style.animationDuration =
            (2 + Math.random()*2) + "s";

            efeitos.appendChild(galho);

            setTimeout(()=>{

                galho.remove();

            },5000);
        }

    },2000);
}

criarGalhos();

/* =========================
   RELÂMPAGOS
========================= */

setInterval(()=>{

    if(
        document.body.classList.contains(
            "tempestade"
        )
    ){

        flash.classList.add(
            "relampago"
        );

        setTimeout(()=>{

            flash.classList.remove(
                "relampago"
            );

        },250);
    }

},3000);

/* =========================
   ANALISAR CLIMA
========================= */

function analisar(){

    limparEfeitos();

    const temperatura =
    Number(
        document.getElementById(
            "temperatura"
        ).value
    );

    const umidade =
    Number(
        document.getElementById(
            "umidade"
        ).value
    );

    const clima =
    document.getElementById(
        "clima"
    ).value;

    const resultado =
    document.getElementById(
        "resultado"
    );

    const visual =
    document.getElementById(
        "climaVisual"
    );

    let alerta = "";
    let dica = "";

    document.body.className = "";

    /* =====================
       SOL
    ===================== */

    if(clima === "sol"){

        document.body.classList.add(
            "sol"
        );

        criarSol();

        visual.innerHTML = "☀️";

        alerta =
        "☀️ Clima Favorável";

        dica =
        "Excelente momento para atividades agrícolas e monitoramento das culturas.";
    }

    /* =====================
       CHUVA
    ===================== */

    if(clima === "chuva"){

        document.body.classList.add(
            "chuva"
        );

        criarChuva();

        criarNuvens();

        visual.innerHTML = "🌧️";

        alerta =
        "🌧️ Chuva Prevista";

        dica =
        "Aproveite a água da chuva e monitore a drenagem do solo.";
    }

    /* =====================
       TEMPESTADE
    ===================== */

    if(clima === "tempestade"){

        document.body.classList.add(
            "tempestade"
        );

        criarChuva();

        criarNuvens();

        visual.innerHTML = "⛈️";

        alerta =
        "⛈️ ALERTA DE TEMPESTADE";

        dica =
        "Proteja equipamentos, estruturas e animais. Ventos fortes e descargas elétricas podem ocorrer.";
    }

    /* =====================
       SECA
    ===================== */

    if(clima === "seca"){

        document.body.classList.add(
            "seca"
        );

        criarSeca();

        criarFogo();

        criarFumaca();

        visual.innerHTML = "🔥";

        alerta =
        "🔥 ALERTA DE SECA";

        dica =
        "Economize água, utilize irrigação eficiente e monitore a umidade do solo.";
    }

    /* =====================
       ALERTAS EXTRAS
    ===================== */

    if(temperatura > 35){

        dica +=
        "<br><br>🌡️ Temperatura muito elevada. Risco de estresse térmico nas plantas.";
    }

    if(temperatura < 10){

        dica +=
        "<br><br>❄️ Temperatura baixa. Algumas culturas podem sofrer danos.";
    }

    if(umidade < 30){

        dica +=
        "<br><br>💧 Umidade baixa. Considere irrigação sustentável.";
    }

    if(umidade > 80){

        dica +=
        "<br><br>🌱 Umidade elevada. Atenção ao surgimento de fungos.";
    }

    resultado.innerHTML = `

        <h2>${alerta}</h2>

        <br>

        <p>${dica}</p>

        <br>

        <strong>🌱 Recomendação Sustentável:</strong>

        Utilize tecnologias climáticas para reduzir desperdícios, proteger o meio ambiente e aumentar a produtividade agrícola.

    `;
}

/* =========================
   ESTADO INICIAL
========================= */

criarSol();