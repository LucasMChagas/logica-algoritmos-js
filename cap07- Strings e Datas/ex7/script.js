const form = document.querySelector('form');
const resp = document.querySelector('h3');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const senha = form.inSenha.value;

    let verification = verifyPassword(senha);
    if (verification.validade){
        resp.innerText = "Ok! Senha válida"
    }else{
        resp.innerText = `Senha inválida! A senha deve ${verification.erro.join(", ")}`
    }

})

function verifyPassword(password){
    let erros = [];
    if (password.length < 8 || password.length > 15) {
        erros.push('possuir pelo menos 8 caracteres');
    }

    if (password.match(/[0-9]/g) === null) {
        erros.push('possuir números');
    }

    if (!password.match(/[a-z]/g)) {
        erros.push('possuir letras minúsculas');
    }

    if(!password.match(/[A-Z]/g) || password.match(/[A-Z]/g).length === 1) {
        erros.push('possuir pelo menos 2 letras maiúsculas')
    }

    if (!password.match(/[\W|_]/g)) {
        erros.push('possuir símbolos')
    }

    if(erros.length == 0){
        return { erro: null, validade: true };
    }else{
        return { erro: erros, validade: false };
    }

}