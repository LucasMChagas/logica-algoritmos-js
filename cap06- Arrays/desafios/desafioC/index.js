const frm = document.querySelector("form");
const respLista = document.querySelector("pre");

const candidatos = [];

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = frm.inCandidato.value;
    const acertos = Number(frm.inAcertos.value);

    candidatos.push({nome,  acertos});

    respLista.innerText = "";

    frm.inCandidato.value = "";
    frm.inAcertos.value = "";

    frm.btListar.dispatchEvent( new Event("click"));
});

frm.btListar.addEventListener("click", () => {
    respLista.innerText = "";
    candidatos.forEach(candidato => {
        respLista.innerText += `${candidato.nome} - ${candidato.acertos} acertos\n `;
    })
});

frm.btAprovados.addEventListener("click", () => {
    const numero = Number(prompt("Número de acertos para aprovação?"));
    candidatos.sort((a, b) => b.acertos - a.acertos);
    const candidatosAprovados = candidatos.filter(candidato => candidato.acertos >= numero);
    respLista.innerText = "";
    candidatosAprovados.forEach(candidato => {
        respLista.innerText += `${candidato.nome} - ${candidato.acertos} acertos\n `;
    })
});




