const frm = document.querySelector("form");
const respMedicamento = document.querySelector("#outPromocao");
const respPreco = document.querySelector("#outPreco");

frm.addEventListener("submit", (e) => {
    const valor = (Math.floor(Number(frm.inPreco.value)) * 2).toFixed(2);
    respMedicamento.innerText = `Promoção de ${frm.inMedicamento.value}`
    respPreco.innerText = `Leve 2 por apenas R$ ${valor}`
    e.preventDefault();
})