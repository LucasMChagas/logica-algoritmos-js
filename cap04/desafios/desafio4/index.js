const form= document.querySelector('form');
const resp1 =document.querySelector('#resp1');
const resp2 =document.querySelector('#resp2');


form.addEventListener('submit', e => {
    e.preventDefault();
    resp1.innerText = "";
    resp2.innerText = "";

    const ladoA = Number(form.inLadoA.value);
    const ladoB = Number(form.inLadoB.value);
    const ladoC = Number(form.inLadoC.value);

    if (ladoA > (ladoB + ladoC) || ladoB > (ladoA + ladoC) || ladoC > (ladoA + ladoB)){
        resp1.innerText = "Lados não podem formar um triângulo";
        return;
    }else if (ladoA === ladoB && ladoA === ladoC){
        resp1.innerText = "Lados podem formar um triângulo";
        resp2.innerText = "Tipo: Equilátero";
        return;
    }else if (ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC){
        resp1.innerText = "Lados podem formar um triângulo";
        resp2.innerText = "Tipo: Escaleno";
        return;
    }else if(ladoA === ladoB || ladoA === ladoC || ladoB === ladoC){
        resp1.innerText = "Lados podem formar um triângulo";
        resp2.innerText = "Tipo: Isóceles";
        return;
    }





})