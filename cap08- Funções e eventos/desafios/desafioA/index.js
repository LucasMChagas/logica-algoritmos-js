const form = document.querySelector('form');
const resp1 = document.querySelector('#resp1');
const resp2 = document.querySelector('#resp2');
const resp3 = document.querySelector('#resp3');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = form.inNome.value;
    let tracos = retornarTracos(nome);
    resp1.innerText = nome;
    resp2.style.fontSize = '22.5px';
    resp2.innerText = tracos;
    resp3.innerText = `Categoria:  ${categorizarAluno(Number(form.inIdade.value))}`
});

function retornarTracos(nome){
    let tracos = "";
    for(const letra of nome){
        if (letra === " "){
            tracos += " "
        }else {
            tracos += "-";
        }
    }
    return tracos;
}

function categorizarAluno(number){
    if (number <= 12){
        return "Infantil";
    }else if(number >= 13 && number <= 18){
        return "Juvenil";
    }else {
        return "Adulto";
    }
}