const frm = document.querySelector("form");
const respLista = document.querySelector("pre");
const ordem = document.querySelector("h4");

const numeros = [];

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const numero = Number(frm.inNumero.value);

    if (numeros.includes(numero)) {
        respLista.innerText = `Número ${numero} já está na lista`;
        return;
    }
    numeros.push(numero);

    respLista.innerText = "";
    respLista.innerText += `Números: ${numeros}`;

    frm.inNumero.value = "";
    frm.inNumero.focus();
});

frm.btOrdem.addEventListener("click", () => {

    for (let i = 0; i < numeros.length - 1; i++) {
        if (numeros[i] > numeros[i + 1]) {
            ordem.innerText = `Atenção... Números não estão em ordem crescente`
            return;
        }
    }
    ordem.innerText = `Números estão em ordem crescente`;
});


