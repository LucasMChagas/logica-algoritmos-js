const form= document.querySelector('form');
const resp =document.querySelector('h3');


form.addEventListener('submit', e => {
    e.preventDefault();

    const velocidadePermitida = Number(form.inVelocidade.value);
    const velocidadeCondutor = Number(form.inCondutor.value);

    if (velocidadeCondutor <= velocidadePermitida) {
        resp.innerText = `Sem multa!`;
    }else if(velocidadeCondutor > velocidadePermitida && velocidadeCondutor <= velocidadePermitida + (velocidadePermitida * 0.2)){
        resp.innerText = `Multa leve`;
    }else if(velocidadeCondutor > velocidadePermitida && velocidadeCondutor > velocidadePermitida + (velocidadePermitida * 0.2)){
        resp.innerText = `Multa Grave`;
    }
})