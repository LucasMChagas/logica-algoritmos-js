const form = document.querySelector('form');
const resp = document.querySelector('h4');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = form.inName.value;
    let senha;
    if(!validarNome(nome)){
        resp.innerText = "Nome inválido"
    }else{
        senha = obterSobrenome(nome).toLowerCase().replace(/ /g,"");
        let numeroVogais = contarVogais(nome);
        resp.innerText = senha + String(numeroVogais).padStart(2,"0");
    }
});

function validarNome(nome) {
    return nome.includes(" ");
}

function obterSobrenome(nome) {
    let sobrenome = nome.split(" ");
    sobrenome = sobrenome.slice(sobrenome.length - 1).join(" ");
    return sobrenome;
}

function contarVogais(nome) {
    let contador = 0;
    for(let letra of nome){
        if (ehVogal(letra)){
            contador++;
        }
    }
    return contador;
}

function ehVogal(letra){
    const letraMinuscula = letra.toLowerCase();

    const vogais = "aeiouáàãâéêíóôõúü";

    return vogais.includes(letraMinuscula);
}

