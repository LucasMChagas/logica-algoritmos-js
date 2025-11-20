const form = document.querySelector('form');
const resp1 = document.querySelector('#resp1');
const resp2 = document.querySelector('#resp2');
const selecao = document.querySelector('#inConvenio');
const etiquetaSelecao = document.querySelector('#lbConvenio');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valor = Number(form.inValor.value);
    let num = form.inConvenio.selectedIndex;
    let convenio = form.inConvenio.options[num].value;


    let total = valorASerPago(valor, convenio);
    resp1.innerText = `Desconto R$ ${(valor - total).toFixed(2)}`
    resp2.innerText = `A pagar R$ ${total.toFixed(2)}`
});

form.rbSim.addEventListener('click', (e) => {
    etiquetaSelecao.style.display = '';
    selecao.style.display = '';
});

form.rbNao.addEventListener('click', (e) => {
    etiquetaSelecao.style.display = 'none';
    selecao.style.display = 'none';
});

function calcularDesconto(valor, desconto){
    let perDesconto = desconto/100;
    let valorDoDesconto = valor * perDesconto;
    return valorDoDesconto;
}

function valorASerPago(valor, nomeDoConvenio){
    if (nomeDoConvenio === "amigoDosAnimais"){
        valor = valor - calcularDesconto(valor, 20);
        return valor;
    }else if(nomeDoConvenio === "saudeAnimal"){
        console.log(nomeDoConvenio)
        return  valor - calcularDesconto(valor, 50);
    }else{
        console.log("nenhum");
        return  valor - calcularDesconto(valor, 10);
    }
}