const frm = document.querySelector("form");
const resp1 = document.querySelector("#resp1");
const resp2 = document.querySelector("#resp2");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    let dataInfracao = new Date(frm.inDataInfracao.value);
    let novaHora = dataInfracao.getHours() + 3;
    dataInfracao.setHours(novaHora);
    let prazo = 90;
    let novaData = dataInfracao.getDate() + prazo;
    dataInfracao.setDate(novaData);

    let valor = Number(frm.inValorMulta.value);
    let valorComDesconto = valor - (valor * 0.2);

    resp1.innerText = `Data Limite para pagamento com desconto: ${dataInfracao.toLocaleDateString("pt-BR")}`;
    resp2.innerText = `Valor com desconto R$: ${valorComDesconto.toFixed(2)}`;
});



