const form= document.querySelector('form');
const resp =document.querySelector('h3');


form.addEventListener('submit', e => {
    e.preventDefault();

    const number = Number(form.inNumero.value);

    if (number % 2 === 0) {
        resp.innerText = `${number} é par`;
    }else{
        resp.innerText = `${number} é ímpar`;
    }
})