const nomeProduto = document.querySelector('#inProduto');
const btnAdicionar = document.getElementById("btnAdicionar");
const btnLimparLista = document.getElementById("btnLimparLista");
const resp = document.querySelector("#resp");
const titulo = document.querySelector("#titulo");
const separador = document.querySelector("#separador");



btnAdicionar.addEventListener("click", (e) => {
    if(localStorage.getItem("listaProdutos")){
        let listaProdutos = localStorage.getItem("listaProdutos");
        listaProdutos = ordernarPalavrasNaString(listaProdutos,nomeProduto.value);
        localStorage.setItem("listaProdutos", listaProdutos);
        mostrarlista(listaProdutos.split(";"));
        nomeProduto.value = "";
    }else{
        localStorage.setItem("listaProdutos", nomeProduto.value);
        mostrarlista([nomeProduto.value]);
        nomeProduto.value = "";
    }

})

btnLimparLista.addEventListener("click", (e) => {
    if (confirm("Tem certeza que deseja limpar a lista")){
        localStorage.removeItem("listaProdutos");
        resp.innerText = "";
        titulo.className = "oculto";
        separador.className = "oculto";
    }
})

function mostrarlista(arrayDeString){
    titulo.className ="";
    separador.className ="";
    let lista = "";

    for (let i = 0; i < arrayDeString.length; i++){
        lista += `${arrayDeString[i]}\n`;
    }
    resp.innerText = lista;
}

function ordernarPalavrasNaString(stringComPalavras, novaPalavra){
    stringComPalavras = stringComPalavras + ";" + novaPalavra;
    let palavras = stringComPalavras.split(";");
    palavras.sort((a, b) => a.localeCompare(b, 'pt-BR', { sensitivity: 'base' }));
    stringComPalavras = palavras[0];
    for (let i = 1; i < palavras.length; i++){
        stringComPalavras = stringComPalavras + ";" + palavras[i];
    }
    return stringComPalavras;
}

window.addEventListener("load", ()=>{
    if (localStorage.getItem("listaProdutos")){
        mostrarlista(localStorage.getItem("listaProdutos").split(";"));
    }
})