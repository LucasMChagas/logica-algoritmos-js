//Cria a referência ao form e ao elemento h3
const form = document.querySelector('form');
const response = document.querySelector('h3');

form.addEventListener('submit', (e) => {
    const nome = form.inNome.value; // Obtém o nome digitado no form
    response.innerText = `Olá ${nome}!`; //Adiciona o texto ao elemento h3
    e.preventDefault(); // Evita o ennvio do form
    alert(response.innerText);
})