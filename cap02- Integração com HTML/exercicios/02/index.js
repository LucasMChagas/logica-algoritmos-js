const frm = document.querySelector("form");
const resp = document.querySelector("#outValor");

frm.addEventListener("submit", (e)=> {
    const valorMinutos = Number(frm.inValor.value);
    const valorTempo = Number(frm.inTempo.value);

    const valor = Math.ceil(valorTempo / 15) * valorMinutos;

    resp.innerText = `Valor total a pagar R$: ${valor.toFixed(2)}`;
    e.preventDefault();
})