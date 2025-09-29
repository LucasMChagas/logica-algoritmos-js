const form = document.querySelector('form');
const resp = document.querySelector('h3');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = form.inFuncionario.value.trim();
    const dominio = form.inDominio.value.trim();

    resp.innerText = `E-mail: ${generateInstitutionalEmail(nome, dominio)}`
})

function generateInstitutionalEmail(name, companyDomain){
    const partes = name.split(" ");
    let email = "";
    const tam = partes.length;

    for (let i = 0; i < tam - 1; i++) {
        email += partes[i].charAt(0).toLowerCase();
    }

    email += partes[tam - 1] + "@" + companyDomain;
    return email.toLowerCase();
}