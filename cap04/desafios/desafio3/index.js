const form= document.querySelector('form');
const resp1 =document.querySelector('#resp1');
const resp2 =document.querySelector('#resp2');


form.addEventListener('submit', e => {
    e.preventDefault();
    resp1.innerText = "";
    resp2.innerText = "";

    const valor = Number(form.inValorMoedas.value);

    if (valor < 1.00) {
        resp1.innerText = "Valor Insuficiente"
    }else if (valor > 0.99 && valor < 1.75){
        resp1.innerText = "Tempo: 30 min";
        resp2.innerText = `Troco R$: ${(valor - 1.00).toFixed(2)}`;
    }else if (valor > 1.74 && valor <= 2.99){
        resp1.innerText = "Tempo: 60 min";
        resp2.innerText = `Troco R$: ${(valor - 1.75).toFixed(2)}`;
    }else if (valor >= 3.00){
        resp1.innerText = "Tempo: 120 min";
        resp2.innerText = `Troco R$: ${(valor - 3.00).toFixed(2)}`;
    }

})