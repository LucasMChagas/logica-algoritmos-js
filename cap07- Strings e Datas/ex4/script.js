const form = document.querySelector('form');
const resp = document.querySelector('h3');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = form.inNome.value.trim();

    if (!nome.includes(" ")){
        alert("Informe o nome completo...");
        return;
    }

    const priEspaco = nome.indexOf(" ");
    const ultEspaco = nome.lastIndexOf(" ");

    const cracha = nome.substring(0, priEspaco) + nome.substring(ultEspaco);

    resp.innerText = `Crachá: ${cracha}`;
})